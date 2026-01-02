#!/usr/bin/env bash
set -euo pipefail

# ---- config ----
PAGES_DIR="docs"
IMG_DIR="$PAGES_DIR/assets/img"
JS_DIR="$PAGES_DIR/js"
CSS_DIR="$PAGES_DIR/css"
LEGACY_PHP_DIR="legacy/php"

# ---- helpers ----
say() { printf "\n\033[1m%s\033[0m\n" "$*"; }
mkdirs() { mkdir -p "$PAGES_DIR" "$IMG_DIR" "$JS_DIR" "$CSS_DIR" "$LEGACY_PHP_DIR"; }

is_image() {
  local f="$1"
  shopt -s nocasematch
  [[ "$f" =~ \.(png|jpg|jpeg|gif|webp|svg|ico)$ ]]
}

move_if_exists() {
  local src="$1"
  local dst="$2"
  [[ -e "$src" ]] || return 0
  # use git mv when possible; fallback to mv for untracked files
  if git ls-files --error-unmatch "$src" >/dev/null 2>&1; then
    git mv "$src" "$dst"
  else
    mkdir -p "$(dirname "$dst")"
    mv "$src" "$dst"
  fi
}

# ---- preflight ----
say "Preflight checks…"
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || { echo "Not in a git repo. cd into /c/dev/Thelore first."; exit 1; }

say "Creating target folders…"
mkdirs

# ---- move files from repo root only (safe + predictable) ----
say "Moving root-level files into structure…"

# Move HTML into docs/ (except if already in docs/)
for f in ./*.html; do
  [[ -e "$f" ]] || continue
  base="$(basename "$f")"
  move_if_exists "$base" "$PAGES_DIR/$base"
done

# Move JS into docs/js/
for f in ./*.js; do
  [[ -e "$f" ]] || continue
  base="$(basename "$f")"
  move_if_exists "$base" "$JS_DIR/$base"
done

# Move CSS into docs/css/
for f in ./*.css; do
  [[ -e "$f" ]] || continue
  base="$(basename "$f")"
  move_if_exists "$base" "$CSS_DIR/$base"
done

# Move PHP into legacy/php/ (GitHub Pages won't run it)
for f in ./*.php; do
  [[ -e "$f" ]] || continue
  base="$(basename "$f")"
  move_if_exists "$base" "$LEGACY_PHP_DIR/$base"
done

# Move images at root into docs/assets/img/
for f in ./*; do
  [[ -f "$f" ]] || continue
  base="$(basename "$f")"
  if is_image "$base"; then
    move_if_exists "$base" "$IMG_DIR/$base"
  fi
done

# ---- ensure docs/index.html exists ----
say "Ensuring docs/index.html exists…"
if [[ ! -f "$PAGES_DIR/index.html" ]]; then
  # pick a reasonable candidate to copy as index
  candidate=""
  for c in "world_info.html" "world_info" "home.html" "main.html"; do
    if [[ -f "$PAGES_DIR/$c" ]]; then candidate="$PAGES_DIR/$c"; break; fi
  done
  # otherwise: first html file in docs
  if [[ -z "$candidate" ]]; then
    first_html="$(ls -1 "$PAGES_DIR"/*.html 2>/dev/null | head -n 1 || true)"
    [[ -n "$first_html" ]] && candidate="$first_html"
  fi

  if [[ -n "$candidate" ]]; then
    cp "$candidate" "$PAGES_DIR/index.html"
    # add to git if needed
    git add "$PAGES_DIR/index.html" || true
    say "Created docs/index.html from: $candidate"
  else
    cat > "$PAGES_DIR/index.html" <<'HTML'
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Thelore</title>
</head>
<body>
  <h1>Thelore</h1>
  <p>Index placeholder. Add links to your pages in /docs.</p>
</body>
</html>
HTML
    git add "$PAGES_DIR/index.html" || true
    say "Created minimal docs/index.html (no candidate html found)."
  fi
else
  say "docs/index.html already exists — leaving it untouched."
fi

# ---- summary ----
say "Done. Review changes:"
echo "  git status"
echo "  git diff --name-status --cached"
echo "  git diff --name-status"
