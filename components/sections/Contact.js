import { useState } from "react";
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
import styles from "./Contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className="container">
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="section-label">Let&apos;s Talk</p>
          <h2 className="section-title">
            Get In <span>Touch</span>
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
            <h3 className={styles.cta}>
              Freelance, contract & product work welcome
            </h3>
            <p className={styles.body}>
              I&apos;m available for freelance projects, short-term contracts,
              and product collaborations. Whether you need a web app, mobile
              solution, cloud automation, or AI prototype, let&apos;s discuss
              how I can help deliver it.
            </p>

            <motion.div
              className={styles.channels}
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {[
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="20"
                      height="20"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <polyline points="2,4 12,13 22,4" />
                    </svg>
                  ),
                  label: "Email",
                  value: personal.email,
                  action: copy,
                  actionIcon: copied ? (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2.5"
                      width="16"
                      height="16"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="16"
                      height="16"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  ),
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="20"
                      height="20"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: personal.phone,
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="20"
                      height="20"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Location",
                  value: personal.location,
                },
              ].map((ch) => (
                <motion.div
                  key={ch.label}
                  className={`card ${styles.channel}`}
                  variants={scaleIn}
                  whileHover={{ y: -2 }}
                >
                  <div className={styles.channelIcon}>{ch.icon}</div>
                  <div className={styles.channelInfo}>
                    <span className={styles.channelLabel}>{ch.label}</span>
                    <span className={styles.channelValue}>{ch.value}</span>
                  </div>
                  {ch.action && (
                    <motion.button
                      className={styles.copyBtn}
                      onClick={ch.action}
                      title="Copy"
                      whileTap={{ scale: 0.9 }}
                    >
                      {ch.actionIcon}
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.right}
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <div className={`card ${styles.ctaCard}`}>
              <div className={styles.ctaGlow} />
              <h3 className={styles.ctaTitle}>Say Hello 👋</h3>
              <p className={styles.ctaDesc}>
                The fastest way to reach me is via email. I typically respond
                within 24 hours.
              </p>
              <motion.a
                href={`mailto:${personal.email}`}
                className={`btn btn-primary ${styles.ctaBtn}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send an Email
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  width="16"
                  height="16"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.a>
              <div className={styles.divider} />
              <p className={styles.socialLabel}>Or find me on</p>
              <div className={styles.socialRow}>
                {[
                  {
                    href: personal.github,
                    label: "GitHub",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="18"
                        height="18"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    href: personal.linkedin,
                    label: "LinkedIn",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="18"
                        height="18"
                      >
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {s.icon}
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
