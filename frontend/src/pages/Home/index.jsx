import Hero from "../../components/home/Hero";
import Statistics from "../../components/home/Statistics";
import Features from "../../components/home/Features";
import FeaturedTournament from "../../components/home/FeaturedTournament";
import HowItWorks from "../../components/home/HowItWorks";
import CTA from "../../components/home/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <Features />
      <FeaturedTournament />
      <HowItWorks />
      <CTA /> 
    </>
  );
}

export default Home;