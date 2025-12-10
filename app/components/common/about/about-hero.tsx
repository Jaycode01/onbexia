import Image from "next/image";
import "./about-hero.css";

const AboutHero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="navigate-text">
          <Image src="/icons/home.svg" alt="home icon" width={25} height={25} />
          <span>/</span>
          <span>about</span>
        </p>
        <h1>About Us</h1>
      </div>
    </section>
  );
};

export default AboutHero;
