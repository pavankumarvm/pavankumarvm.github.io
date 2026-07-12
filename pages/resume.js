import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";
import Footer from "../components/ui/Footer";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Pavankumar Maurya – Resume & Experience</title>
        <meta
          name="description"
          content="Detailed experience, skills, and education for Pavankumar Maurya, freelance full-stack and DevOps engineer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Pavankumar Maurya" />
      </Head>
      <Navbar />
      <main>
        <section className="section" id="resume">
          <div className="container">
            <div style={{ marginBottom: 28 }}>
              <p className="section-label">Resume</p>
              <h2 className="section-title">
                Experience, <span>Skills</span> & Education
              </h2>
              <div className="divider" />
              <p
                style={{
                  color: "var(--text-secondary)",
                  marginTop: 18,
                  maxWidth: 680,
                  lineHeight: 1.75,
                }}
              >
                A full breakdown of my technical experience, skills, and
                academic background for anyone who want to learn more about me.
              </p>
              <div style={{ marginTop: 24 }}>
                <a
                  href="/Pavankumar_Maurya.pdf"
                  download
                  className="btn btn-primary"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
