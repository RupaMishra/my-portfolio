import { getDev } from "../utils/constants";
import ContactUs from "./ContactUs";
import Projects from "./Projects";
import Services from "./Services";
import TopLandingSection from "./TopLandingSection";
import Work from "./Work";

const Landing = () => {
  return (
    <>
      <TopLandingSection />
      <Services />
      {getDev == 50 && <Work />}
      {getDev == 7 && <Projects />}
      <ContactUs />
    </>
  );
};

export default Landing;
