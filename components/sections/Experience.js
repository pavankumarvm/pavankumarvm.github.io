import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../../data/resume";
import { fadeUp, fadeLeft, fadeRight, stagger, viewportOnce } from "../../utils/motion";
import TechIcon from "../ui/TechIcon";
import styles from "./Experience.module.css";

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experience[active];

  return (
    <section className={`section ${styles.section}`} id="experience">
      <div className="container">
        <motion.div className={styles.header} variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <p className="section-label">Career</p>
          <h2 className="section-title">Work <span>Experience</span></h2>
          <div className="divider" />
        </motion.div>

        <div className={styles.layout}>
          <motion.div className={styles.sidebar} variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewportOnce}>
            {experience.map((e, i) => (
              <motion.button
                key={e.company}
                className={`${styles.tab} ${active === i ? styles.activeTab : ""}`}
                onClick={() => setActive(i)}
                variants={fadeLeft}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.tabAccent} style={{ background: active === i ? e.color : "transparent" }} />
                <div className={styles.tabContent}>
                  <span className={styles.tabCompany}>{e.company}</span>
                  <span className={styles.tabRole}>{e.role}</span>
                  <span className={styles.tabDuration}>{e.duration}</span>
                </div>
                <div className={styles.tabBadge} style={{ background: e.type === "Full-Time" ? "rgba(34,197,94,0.15)" : "rgba(251,191,36,0.15)", color: e.type === "Full-Time" ? "#22c55e" : "#fbbf24" }}>
                  {e.type}
                </div>
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className={`card ${styles.detail}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className={styles.detailHeader}>
                <div className={styles.logoBox} style={{ background: `${exp.color}22`, border: `1px solid ${exp.color}44` }}>
                  <span style={{ color: exp.color }}>{exp.logo}</span>
                </div>
                <div>
                  <h3 className={styles.detailRole}>{exp.role}</h3>
                  <div className={styles.detailMeta}>
                    <span className={styles.detailCompany}>{exp.company}</span>
                    <span className={styles.metaDot} />
                    <span className={styles.detailLocation}>{exp.location}</span>
                    <span className={styles.metaDot} />
                    <span className={styles.detailDuration}>{exp.duration}</span>
                  </div>
                </div>
              </div>

              <ul className={styles.points}>
                {exp.points.map((p, i) => (
                  <motion.li
                    key={i}
                    className={styles.point}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <span className={styles.pointDot} style={{ background: exp.color }} />
                    <span>{p}</span>
                  </motion.li>
                ))}
              </ul>

              <div className={styles.techRow}>
                {exp.tech.map((t) => (
                  <motion.span key={t} className={`tag ${styles.techTag}`} whileHover={{ scale: 1.08, y: -1 }}>
                    <TechIcon name={t} size={12} />
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
