import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pavankumar Maurya – DevOps & Full-Stack Engineer</title>
        <meta name="description" content="Portfolio of Pavankumar Maurya – Associate DevOps Engineer at SAP Labs India, Full-Stack Developer & AI/ML Enthusiast." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Pavankumar Maurya" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
