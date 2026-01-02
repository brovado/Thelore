const siteNav = {
  primary: [
    { title: "Home", path: "index.html" },
    { title: "Player Portal", path: "players/index.html" },
    { title: "Destinations", path: "players/destinations/index.html" },
    { title: "Tools", path: "players/tools/index.html" }
  ],
  chapters: [
    { title: "Chapter 1 — Canon Summary", path: "chapters/chapter-1-canon-summary.html" },
    { title: "Chapter 1 — Chronicle", path: "chapters/chapter-1-chronicle.html" },
    { title: "Chapter 2 — Opening Dossier", path: "chapters/chapter-2-opening-dossier.html" }
  ],
  wiki: [
    { title: "Wiki Home", path: "wiki/index.html" },
    { title: "World Information", path: "wiki/world_info.html" },
    { title: "About / Credits", path: "about.html" }
  ],
  tools: [
    { title: "Time Tracker", path: "tools/time.html" },
    { title: "World Calendar", path: "tools/world_calendar.html" },
    { title: "World Info", path: "tools/world_info.html" },
    { title: "Image Directory", path: "tools/image_dir.html" },
    { title: "Departure Board", path: "tools/departure_board.html" }
  ]
};

const highlightActiveLinks = () => {
  const current = document.body?.dataset?.current || "";
  const currentPath = current ? `/${current}` : window.location.pathname;

  document.querySelectorAll("a[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const resolvedPath = new URL(href, window.location.href).pathname;
    const sectionPath = resolvedPath.replace(/index\\.html$/, "");

    if (currentPath === resolvedPath || (sectionPath && currentPath.startsWith(sectionPath))) {
      link.classList.add("active");
    }
  });
};

window.addEventListener("load", highlightActiveLinks);
