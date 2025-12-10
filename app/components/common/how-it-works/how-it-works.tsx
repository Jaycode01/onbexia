import Step from "./step";
import "./how-it-works.css";

const HowItWorks = () => {
  return (
    <section className="guide">
      <div className="section-intro">
        <h2>How It Works</h2>
        <p>From idea to live tour in just 3 simple steps</p>
      </div>
      <Step
        index="1"
        headline="Get Started in 30 Seconds"
        description="Create your free account—no credit card required. Start building tours immediately."
        stepImage="/icons/star.svg"
      />
      <Step
        index="2"
        headline="Design Your Perfect Onboarding"
        description=" Design beautiful onboarding experiences with our intuitive 
          drag-and-drop builder. Add steps, customize messages, 
          and set triggers—no coding required."
        stepImage="/icons/design.svg"
        reverse={true}
      />
      <Step
        index="3"
        headline="Embed Anywhere"
        description="Copy your unique embed code and paste it into your website. 
          Works with any platform—WordPress, Shopify, React, or plain HTML."
        stepImage="/icons/code.svg"
      />
      <Step
        index="4"
        headline="Track & Optimize"
        description="Monitor completion rates, track user progress, and identify 
          drop-off points. Use real-time analytics to improve your 
          onboarding and boost conversions."
        stepImage="/icons/metric.svg"
        reverse={true}
      />
    </section>
  );
};

export default HowItWorks;
