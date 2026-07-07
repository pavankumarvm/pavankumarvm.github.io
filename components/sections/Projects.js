import { motion } from "framer-motion";
import { projects } from "../../data/resume";
import { fadeUp, scaleIn, stagger, viewportOnce } from "../../utils/motion";
import TechIcon from "../ui/TechIcon";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div className={styles.header} variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="divider" />
          <p className={styles.subtitle}>A selection of projects I&apos;ve built — from AI-powered enterprise tools to ML research.</p>
        </motion.div>

        <motion.div className={styles.grid} variants={stagger(0.12)} initial="hidden" whileInView="show" viewport={viewportOnce}>
          {projects.map((p) => (
            <motion.div key={p.title} className={`card ${styles.card}`} variants={scaleIn} whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap} style={{ background: `${p.color}18`, border: `1px solid ${p.color}30` }}>
                  <span className={styles.icon}>{p.icon}</span>
                </div>
                <div className={styles.topRight}>
                  {p.tags.map((tag) => (
                    <span key={tag} className={styles.tagSmall}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className={styles.meta}>
                <span className={styles.role}>{p.role}</span>
                <span className={styles.duration}>{p.duration}</span>
              </div>

              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.description}</p>

              <div className={styles.techRow}>
                {p.tech.map((t) => (
                  <span key={t} className={`tag ${styles.techTag}`}>
                    <TechIcon name={t} size={11} />
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.accentLine} style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
