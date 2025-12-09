import Image from "next/image";
import "./step.css";

interface StepProps {
  index: string;
  headline: string;
  description: string;
  stepImage: string;
  reverse?: boolean;
}

const Step = ({
  index,
  headline,
  description,
  stepImage,
  reverse,
}: StepProps) => {
  return (
    <div className={`step-wrapper ${reverse ? "reverse" : ""}`}>
      <div className="step-details">
        <h2 className="index">{index}</h2>
        <h3 className="headline">{headline}</h3>
        <p className="description">{description}</p>
      </div>
      <div className="separator"></div>
      <div className="image-wrapper">
        <Image
          src={stepImage}
          alt="step image"
          className="step-image"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Step;
