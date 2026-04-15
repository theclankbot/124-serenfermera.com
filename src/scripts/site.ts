const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const headerNav = document.querySelector(".header-nav");

if (menuToggle && headerNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = headerNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  headerNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      headerNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
});

const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

const tocLinks = Array.from(document.querySelectorAll(".toc-card a"));
const tocSections = tocLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (tocLinks.length && tocSections.length) {
  const updateToc = () => {
    let activeId = tocSections[0].id;

    tocSections.forEach((section) => {
      const bounds = section.getBoundingClientRect();
      if (bounds.top <= 150) {
        activeId = section.id;
      }
    });

    tocLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
    });
  };

  updateToc();
  window.addEventListener("scroll", updateToc, { passive: true });
}
