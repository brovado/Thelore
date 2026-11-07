document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("site-nav");
  if (!navContainer || typeof siteNav === "undefined") {
    const tvToggle = document.querySelector("[data-tv-toggle]");
    if (tvToggle) {
      tvToggle.addEventListener("click", () => {
        document.body.classList.toggle("tv-mode");
      });
    }
    return;
  }

  const root = document.body.dataset.root || "./";
  const current = document.body.dataset.current || "";
  const resolvePath = (path) => `${root}${path}`;

  const renderSection = (title, items) => {
    const section = document.createElement("div");
    section.className = "nav-section";

    const heading = document.createElement("h2");
    heading.textContent = title;
    section.appendChild(heading);

    const list = document.createElement("ul");
    items.forEach((item) => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = resolvePath(item.path);
      link.textContent = item.title;
      if (current === item.path) {
        link.classList.add("active");
      }
      li.appendChild(link);
      list.appendChild(li);
    });

    section.appendChild(list);
    return section;
  };

  navContainer.innerHTML = "";
  navContainer.appendChild(renderSection("Navigate", siteNav.primary));
  if (siteNav.chapters) {
    navContainer.appendChild(renderSection("Chapters", siteNav.chapters));
  }
  navContainer.appendChild(renderSection("Wiki", siteNav.wiki));
  navContainer.appendChild(renderSection("Tools", siteNav.tools));

  const tvToggle = document.querySelector("[data-tv-toggle]");
  if (tvToggle) {
    tvToggle.addEventListener("click", () => {
      document.body.classList.toggle("tv-mode");
    });
  }
});


/* Shared player-facing shell: one navigation, independent of legacy page markup. */
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  if (!/\/players\//.test(path)) return;
  document.body.classList.add("thelore-player");
  const prefix = path.substring(0,path.indexOf("/players/")+1);
  const css = document.createElement("link");
  css.rel = "stylesheet"; css.href = prefix+"assets/css/player-codex.css";
  document.head.appendChild(css);
  const routes = [
    ["Home","players/index.html"],
    ["Factions","players/factions/registry.html"],
    ["Jugol’s Rest","players/city/index.html"],
    ["Society Archives","players/society/index.html"],
    ["Chapter II","players/chapters/chapter-2-hub.html"],
    ["Explore","players/world/atlas.html"],
    ["Character Guide","players/new-character.html"],
    ["Catch Up","players/chapters/chapter-1.html"]
  ];
  const header=document.createElement("header");
  header.className="codex-header";
  const top=document.createElement("div");top.className="codex-top";
  const brand=document.createElement("a");brand.className="codex-brand";brand.href=prefix+"players/index.html";
  brand.innerHTML="<small>THE WORLD OF</small>THELORE";top.appendChild(brand);
  const menu=document.createElement("button");menu.className="codex-menu-button";menu.type="button";menu.textContent="☰ Menu";menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Toggle navigation");top.appendChild(menu);
  const nav=document.createElement("nav");nav.className="codex-links";nav.setAttribute("aria-label","Player navigation");
  routes.forEach(([label,url])=>{
    const a=document.createElement("a");a.href=prefix+url;a.textContent=label;
    const normalized=path.replace(/\/$/,"/index.html");
    if(normalized===new URL(a.href).pathname) a.setAttribute("aria-current","page");
    nav.appendChild(a);
  });
  menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
  top.appendChild(nav);header.appendChild(top);document.body.insertBefore(header,document.body.firstChild);
  const footer=document.createElement("footer");footer.className="codex-footer";
  footer.textContent="THELORE  ·  An adventurer's record  ·  Knowledge grows through play";
  document.body.appendChild(footer);
});
