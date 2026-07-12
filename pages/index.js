import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Pavankumar Maurya – Freelance Full-Stack, DevOps & AI Engineer
        </title>
        <meta
          name="description"
          content="Portfolio of Pavankumar Maurya – Associate DevOps Engineer at SAP Labs India, freelance full-stack developer and AI/ML consultant available for client projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Pavankumar Maurya" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>"
        />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
