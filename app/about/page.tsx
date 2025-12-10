import About from "../components/common/about/about-container";
import AboutHero from "../components/common/about/about-hero";
import Header from "../components/layout/header";
import "./about.css";

function AboutUs() {
  return (
    <main>
      <Header />
      <section>
        <AboutHero />
        <About />
      </section>
    </main>
  );
}

export default AboutUs;
