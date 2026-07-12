import { motion } from "framer-motion";
import { personal } from "../../data/resume";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  stagger,
  scaleIn,
  viewportOnce,
} from "../../utils/motion";
import styles from "./About.module.css";

const highlights = [
  { icon: "🎓", label: "M.Tech", value: "NIT Allahabad", sub: "CGPA 9.07" },
  {
    icon: "🏢",
    label: "Current",
    value: "SAP Labs India",
    sub: "Associate DevOps Engineer",
  },
  { icon: "📍", label: "Location", value: "Pune, India", sub: "Maharashtra" },
  {
    icon: "⚡",
    label: "Focus",
    value: "AI + Full-Stack",
    sub: "DevOps & GenAI",
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Who I <span>Am</span>
          </h2>
          <div className="divider" />
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <p className={styles.intro}>
              I&apos;m an Associate DevOps Engineer at SAP Labs India focused on
              full-stack development, cloud automation, and practical AI
              solutions.
            </p>
            <p className={styles.body}>
              I help build reliable tools and workflows for teams. That includes
              web applications, automation pipelines, and AI-enabled features.
              The goal is to make things easier to run and easier to improve.
            </p>
            <p className={styles.body}>
              I have worked with startups and clients to launch web apps, mobile
              products, and cloud automation that move projects forward. Whether
              it&apos;s an MVP, an AI prototype, or a polished product feature,
              I keep the focus on delivery and practical value.
            </p>
            <p className={styles.body}>
              I enjoy building solutions that solve real problems, from mobile
              experiences and deployment pipelines to automation and AI
              integrations.
            </p>
            <div className={styles.actions}>
              <motion.a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View GitHub
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </motion.a>
              <motion.a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {highlights.map((h) => (
              <motion.div
                key={h.label}
                className={`card ${styles.card}`}
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <span className={styles.cardIcon}>{h.icon}</span>
                <div>
                  <p className={styles.cardLabel}>{h.label}</p>
                  <p className={styles.cardValue}>{h.value}</p>
                  <p className={styles.cardSub}>{h.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
