import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { personal } from "../../data/resume";
import TechIcon from "../ui/TechIcon";
import { fadeUp, fadeLeft, fadeRight, scaleIn } from "../../utils/motion";
import styles from "./Hero.module.css";

const TAGLINES = personal.taglines;

const ORBIT_BADGES = [
  { name: "Vue.js",      color: "#42b883", cls: "ob1" },
  { name: "Python",      color: "#3776ab", cls: "ob2" },
  { name: "Spring Boot", color: "#6db33f", cls: "ob3" },
  { name: "React",       color: "#61dafb", cls: "ob4" },
  { name: "Jenkins",     color: "#d33833", cls: "ob5" },
  { name: "AI / ML",     color: "#a78bfa", cls: "ob6" },
  { name: "Flutter",     color: "#54c5f8", cls: "ob7" },
  { name: "AWS",         color: "#ff9900", cls: "ob8" },
  { name: "Dynatrace",   color: "#00a1b2", cls: "ob9" },
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const target = TAGLINES[taglineIndex];
    if (typing) {
      if (displayed.length < target.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setTaglineIndex((i) => (i + 1) % TAGLINES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, typing, taglineIndex]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.grid} />

      <div className={styles.inner}>
        {/* Left content */}
        <motion.div
          className={styles.content}
          variants={fadeLeft}
          initial="hidden"
          animate="show"
        >
          <motion.div className={styles.badge} variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.1 }}>
            <span className={styles.dot} />
            Available for opportunities
          </motion.div>

          <motion.h1 className={styles.name} variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.2 }}>
            Hi, I&apos;m <span className={styles.highlight}>{personal.name.split(" ")[0]}</span>
            <br />{personal.name.split(" ").slice(1).join(" ")}
          </motion.h1>

          <motion.div className={styles.typewriter} variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.3 }}>
            <span>{displayed}</span>
            <span className={styles.cursor}>|</span>
          </motion.div>

          <motion.p className={styles.bio} variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.4 }}>
            {personal.bio}
          </motion.p>

          <motion.div className={styles.actions} variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.5 }}>
            <motion.a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </motion.a>
            <motion.a
              href="#projects"
              className="btn btn-outline"
              onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div className={styles.socials} variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.6 }}>
            {[
              { href: personal.github, title: "GitHub", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg> },
              { href: personal.linkedin, title: "LinkedIn", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/></svg> },
              { href: `mailto:${personal.email}`, title: "Email", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg> },
            ].map((s) => (
              <motion.a key={s.title} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className={styles.social} title={s.title} whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}>
                {s.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div className={styles.stats} variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.7 }}>
            {[
              { num: "2+", label: "Years Experience" },
              { num: "9.07", label: "M.Tech CGPA" },
              { num: "4+", label: "Projects Built" },
            ].map((s, i) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                {i > 0 && <div className={styles.statDivider} />}
                <div className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div className={styles.visual} variants={fadeRight} initial="hidden" animate="show">
          <div className={styles.avatarWrap}>
            <div className={styles.avatarRing} />
            <motion.div
              className={styles.avatar}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span>PM</span>
            </motion.div>

            {ORBIT_BADGES.map((b, i) => (
              <motion.div
                key={b.name}
                className={`${styles.orbitBadge} ${styles[b.cls]}`}
                style={{ background: `${b.color}22`, border: `1px solid ${b.color}55` }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              >
                <TechIcon name={b.name} size={13} color={b.color} />
                <span style={{ color: "#eeeeff" }}>{b.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className={styles.scrollDown}
        onClick={(e) => { e.preventDefault(); scrollTo("about"); }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2 }}
        whileHover={{ opacity: 1 }}
      >
        <div className={styles.scrollIcon}><span /></div>
        <span className={styles.scrollText}>Scroll down</span>
      </motion.a>
    </section>
  );
}
