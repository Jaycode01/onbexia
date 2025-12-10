import Image from "next/image";
import "./about-container.css";

const About = () => {
  return (
    <section className="about">
      <div className="image-section">
        <Image
          src="/images/about-image-one.jpg"
          alt="about image one"
          width={250}
          height={500}
          className="up-image"
        />
        <Image
          src="/images/about-image-two.jpg"
          alt="about image two"
          width={250}
          height={500}
          className="down-image"
        />
      </div>
      <div className="text-content">
        <h2>
          <span>Abo</span>ut Onbexia
        </h2>
        <p>
          {`We're`} a team of passionate developers who believe that great
          products deserve great first impressions. <b>Onbexia</b> was born from
          a simple frustration: watching talented teams build amazing
          applications, only to see users struggle during their first visit.
          {`We've`} all been there—spending months perfecting a product,
          launching it with excitement, and then realizing that new users just
          {`don't`} know where to start. Traditional onboarding tools were
          either too complex, too expensive, or required developers to write
          custom code for every single step. We knew there had to be a better
          way. {`That's`} why we built <b>Onbexia</b>: a simple, powerful
          platform that lets anyone create beautiful, interactive product tours
          in minutes, not days. Our mission is to help every product team—from
          solo founders to enterprise companies—guide their users with
          confidence, reduce confusion, and turn first-time visitors into
          engaged, loyal customers. We believe that onboarding {`shouldn't`} be
          an afterthought or a technical challenge. It should be as intuitive
          and delightful as the products it introduces. Whether {`you're`}{" "}
          launching a SaaS platform, an e-commerce store, or an internal tool,
          TourMaster gives you the power to create memorable first experiences
          that stick. Join startups who are already transforming how they
          welcome new users, and {`let's`} make the web a more user-friendly
          place, one tour at a time.
        </p>
      </div>
    </section>
  );
};

export default About;
