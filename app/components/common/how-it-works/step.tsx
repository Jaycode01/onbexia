import Image from "next/image";
import { useRef } from "react";
import { motion, type HTMLMotionProps, useInView } from "motion/react";
import "./step.css";

interface StepProps extends HTMLMotionProps<"div"> {
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
  ...motionProps
}: StepProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <div ref={ref} className={`step-wrapper ${reverse ? "reverse" : ""}`}>
      <motion.div
        className="step-details"
        {...motionProps}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="index">{index}</h2>
        <h3 className="headline">{headline}</h3>
        <p className="description">{description}</p>
      </motion.div>
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
