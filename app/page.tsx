import Features from "./components/common/features";
import Hero from "./components/common/hero";
import HowItWorks from "./components/common/how-it-works/how-it-works";

function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
    </>
  );
}

export default Home;
