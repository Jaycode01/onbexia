import "./features.css";
import { Features as features } from "@/app/data/features";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <h2 className="features-heading">Onbexia Features</h2>
      <section className="features-wrapper">
        {features.map((feat) => (
          <div className="feature" key={feat.id}>
            <Image
              src={feat.icon}
              alt={feat.featureHeading}
              className="feature-icon"
              width={120}
              height={120}
            />
            <h3 className="feat-heading">{feat.featureHeading}</h3>
            <p className="feat-description">{feat.featureDescription}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Features;
