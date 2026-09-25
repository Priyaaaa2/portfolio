import { useEffect, useState } from "react";

const links = [
  { id: "top", label: "Home" },
  { id: "work", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="glass fixed bg-white/85! bottom-5 left-1/2 z-50 max-w-[calc(100vw-1.5rem)] -translate-x-1/2 overflow-x-auto rounded-full p-1.5 shadow-lg"
    >
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.id} className="shrink-0">
            <a
              href={`#${link.id}`}
              className={`block rounded-full px-3.5 py-2 text-sm transition-colors ${
                active === link.id
                  ? "bg-ink-900 text-paper"
                  : "text-ink-600 hover:bg-white/70 hover:text-ink-900"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
