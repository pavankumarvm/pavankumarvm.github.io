import { motion } from "framer-motion";
import { fadeUp, scaleIn, stagger, viewportOnce } from "../../utils/motion";
import styles from "./Services.module.css";

const services = [
  {
    title: "Web & SaaS Applications",
    icon: "🌐",
    description:
      "Build responsive, production-ready web apps, dashboards, and SaaS products using modern front-end and backend stacks.",
  },
  {
    title: "Mobile Apps",
    icon: "📱",
    description:
      "Deliver Flutter and React Native mobile experiences with backend integration, push notifications, and app store readiness.",
  },
  {
    title: "AI Agents/ ML Models",
    icon: "🤖",
    description:
      "Create intelligent features, prediction models, and generative AI tools that add real business value to your product.",
  },
  {
    title: "DevOps & Cloud Automation",
    icon: "☁️",
    description:
      "Automate deployments, CI/CD, monitoring, and infrastructure workflows for faster releases and more reliable production systems.",
  },
  {
    title: "Wix & Marketing Websites",
    icon: "🛠️",
    description:
      "Design and launch fast, easy-to-manage Wix websites and landing pages focused on conversion and client updates.",
  },
  {
    title: "MVP & Product Launch",
    icon: "🚀",
    description:
      "Turn your idea into a working MVP quickly, with product-focused development and a clear launch path.",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="section-label">Services</p>
          <h2 className="section-title">
            What I <span>Offer</span>
          </h2>
          <div className="divider" />
          <p className={styles.subtitle}>
            Freelance services tailored for web products, mobile experiences, AI
            solutions, and automated workflows.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`card ${styles.card}`}
              variants={scaleIn}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={styles.cardTop}>
                <span className={styles.badge}>{service.icon}</span>
                <div>
                  <h3 className={styles.title}>{service.title}</h3>
                </div>
              </div>
              <p className={styles.description}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
