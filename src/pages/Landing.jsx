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
      <Work />
      {/* <Projects /> */}
      <ContactUs />
    </>
  );
};

export default Landing;
