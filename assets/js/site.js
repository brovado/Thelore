document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("site-nav");
  if (!navContainer || typeof siteNav === "undefined") {
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
});
