import { motion } from "framer-motion";
import { education } from "../../data/resume";
import { fadeUp, fadeLeft, stagger, viewportOnce } from "../../utils/motion";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <motion.div className={styles.header} variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <p className="section-label">Background</p>
          <h2 className="section-title">My <span>Education</span></h2>
          <div className="divider" />
        </motion.div>

        <motion.div className={styles.timeline} variants={stagger(0.15)} initial="hidden" whileInView="show" viewport={viewportOnce}>
          {education.map((edu, i) => (
            <motion.div key={edu.institute} className={styles.item} variants={fadeLeft}>
              <div className={styles.lineWrap}>
                <motion.div
                  className={styles.dot}
                  style={{ background: edu.color, boxShadow: `0 0 12px ${edu.color}` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.15, type: "spring", stiffness: 300 }}
                />
                {i < education.length - 1 && <div className={styles.line} />}
              </div>

              <motion.div className={`card ${styles.card}`} whileHover={{ y: -3, scale: 1.01 }}>
                <div className={styles.badge} style={{ background: `${edu.color}18`, border: `1px solid ${edu.color}33`, color: edu.color }}>
                  {edu.short || edu.institute.split(",")[0]}
                </div>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institute}>{edu.institute}</p>
                <div className={styles.footer}>
                  <span className={styles.duration}>{edu.duration}</span>
                  <span className={styles.score} style={{ color: edu.color, background: `${edu.color}12`, border: `1px solid ${edu.color}25` }}>
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
