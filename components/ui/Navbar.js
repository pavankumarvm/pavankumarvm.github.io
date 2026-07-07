import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive("#" + sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <span className={styles.logoIcon}>PM</span>
          <span className={styles.logoText}>Pavankumar</span>
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                className={`${styles.link} ${active === l.href ? styles.active : ""}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:pavankumarmaurya1999@gmail.com" className={`${styles.cta} btn btn-primary`}>
          Hire Me
        </a>

        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
              className={styles.mobileLink}
            >
              {l.label}
            </a>
          ))}
          <a href="mailto:pavankumarmaurya1999@gmail.com" className={`${styles.mobileCta} btn btn-primary`}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
