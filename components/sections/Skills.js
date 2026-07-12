import { motion } from "framer-motion";
import { skills } from "../../data/resume";
import { fadeUp, scaleIn, stagger, viewportOnce } from "../../utils/motion";
import TechIcon from "../ui/TechIcon";
import styles from "./Skills.module.css";

const categoryColors = {
  Languages: "#6c63ff",
  Frontend: "#a78bfa",
  Backend: "#00b4d8",
  Mobile: "#f72585",
  "DevOps & Cloud": "#fb923c",
  "AI / ML": "#22c55e",
  Databases: "#facc15",
  Tools: "#e879f9",
};

export default function Skills() {
  return (
    <section className={`section ${styles.section}`} id="skills">
      <div className="container">
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="section-label">Expertise</p>
          <h2 className="section-title">
            Skills &amp; <span>Technologies</span>
          </h2>
          <div className="divider" />
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {Object.entries(skills).map(([category, items]) => {
            const color = categoryColors[category] || "#6c63ff";
            return (
              <motion.div
                key={category}
                className={`card ${styles.card}`}
                variants={scaleIn}
                whileHover={{ y: -4 }}
              >
                <div className={styles.catHeader}>
                  <span
                    className={styles.catDot}
                    style={{ background: color, boxShadow: `0 0 8px ${color}` }}
                  />
                  <h3 className={styles.catTitle}>{category}</h3>
                </div>
                <div className={styles.items}>
                  {items.map((item) => (
                    <motion.span
                      key={item}
                      className={styles.skill}
                      style={{ "--c": color }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      <TechIcon name={item} size={12} color={color} />
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
