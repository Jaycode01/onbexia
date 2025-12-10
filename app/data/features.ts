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
    featureHeading: "Simple Form-based Builder",
    featureDescription:
      "Build beautiful onboarding experiences using straightforward text inputs and textareas. No complicated tools or confusing interfaces—just fill in your tour name, add step titles, descriptions, and target elements. It's as easy as filling out a form, with helpful labels and examples guiding you every step of the way. Anyone on your team can create professional tours in minutes.",
  },
  {
    id: "2",
    icon: "/icons/zap.svg",
    featureHeading: "One Click Embed",
    featureDescription:
      "Copy one line of code and paste it into any website. Works with WordPress, Shopify, React, plain HTML—you name it. No complex integration, no API setup, no developer expertise required. Just paste the script tag before your closing body tag and your tour goes live instantly. It's that simple.",
  },
  {
    id: "3",
    icon: "/icons/iphone.svg",
    featureHeading: "Full Responsiveness",
    featureDescription:
      "Your tours look amazing on desktop, tablet, and mobile. One tour works everywhere—automatically optimized for any screen size. The widget adapts intelligently to different viewports, ensuring your onboarding experience is smooth whether users visit from their phone during commute or their desktop at work. Manage your dashboard from any device too.",
  },
];
