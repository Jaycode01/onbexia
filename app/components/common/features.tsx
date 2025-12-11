"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Features as features } from "@/app/data/features";
import Image from "next/image";
import "./features.css";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 150, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <h2 className="features-heading">Onbexia Features</h2>
      <motion.section
        className="features-wrapper"
        animate={isInView ? "visible" : "hidden"}
        initial="hidden"
        variants={containerVariants}
        ref={ref}
      >
        {features.map((feat) => (
          <motion.div className="feature" key={feat.id} variants={itemVariants}>
            <Image
              src={feat.icon}
              alt={feat.featureHeading}
              className="feature-icon"
              width={120}
              height={120}
            />
            <h3 className="feat-heading">{feat.featureHeading}</h3>
            <p className="feat-description">{feat.featureDescription}</p>
          </motion.div>
        ))}
      </motion.section>
    </>
  );
};

export default Features;
