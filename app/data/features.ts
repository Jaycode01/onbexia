interface FeaturesProps {
  id: string;
  icon: string;
  featureHeading: string;
  featureDescription: string;
}

export const Features: FeaturesProps[] = [
  {
    id: "1",
    icon: "/icons/mac-cursor.svg",
    featureHeading: "Drag & Drop Builder",
    featureDescription:
      "Create beautiful onboarding experiences with our intuitive visual builder. No coding skills required—just point, click, and customize.",
  },
  {
    id: "2",
    icon: "/icons/zap.svg",
    featureHeading: "One Click Embed",
    featureDescription:
      "Copy one line of code and paste it into any website. Works with WordPress, Shopify, React, plain HTML—you name it.",
  },
  {
    id: "3",
    icon: "/icons/iphone.svg",
    featureHeading: "Full Responsiveness",
    featureDescription:
      "Your tours look amazing on desktop, tablet, and mobile. One tour works everywhere—automatically optimized for any screen size.",
  },
];
