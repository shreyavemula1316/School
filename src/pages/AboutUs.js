import React from "react";
import AboutBanner from "../components/AboutBanner";
import History from "../components/History";
import VisionMissionValues from "../components/Vision";
import PrincipalMessage from "../components/PrincipalMessage";
import Infrastructure from "../components/Infrastructure";

const AboutUs = () => {
  return (
    <div>
      <AboutBanner />
      <History />
      <VisionMissionValues />
      <PrincipalMessage />
      <Infrastructure />
    </div>
  );
};

export default AboutUs;
