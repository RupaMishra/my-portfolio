import { getDev } from "../utils/constants";
import ContactUs from "./ContactUs";
import Projects from "./Projects";
import Services from "./Services";
import TopLandingSection from "./TopLandingSection";
import Work from "./Work";

const Landing = () => {
  console.log("developer", getDev);

  return (
    <>
      <TopLandingSection />
      <Services />
      <Work />
      <Projects />
      <ContactUs />
    </>
  );
};

export default Landing;
