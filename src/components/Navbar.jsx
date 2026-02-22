import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  const sections = ["home", "about", "skills", "contact", "projects"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-links">
        {sections.map((section) => {
          const isActive = active === section;
          const isProject = section === "projects";

          return (
            <a
              key={section}
              href={`#${section}`}
              className={`
                ${isProject ? "nav-btn" : ""}
                ${isActive ? "active" : ""}
              `}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
