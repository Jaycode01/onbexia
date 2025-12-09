import AboutHero from "../components/common/about/about-hero";
import Header from "../components/layout/header";
import "./about.css";

function AboutUs() {
  return (
    <main>
      <Header />
      <section className="about">
        <AboutHero />
      </section>
    </main>
  );
}

export default AboutUs;
