import { getDev } from "../utils/constants";
import Projects from "./Projects";
import Services from "./Services";
import TopLandingSection from "./TopLandingSection";

const Landing = () => {
  console.log("developer", getDev);

  return (
    <>
      <TopLandingSection />
      <Services />
      <Projects />
    </>
  );
};

export default Landing;
