import React from "react";
import AboutBanner from "../components/About/AboutBanner";
import History from "../components/About/History";
import Vision from "../components/About/Vision";
import PrincipalMessage from "../components/About/PrincipalMessage";
import Infrastructure from "../components/About/Infrastructure";

const AboutUs = () => {
  return (
    <div>
      <AboutBanner />
      <History />
      <Vision />
      <PrincipalMessage />
      <Infrastructure />
    </div>
  );
};

export default AboutUs;
