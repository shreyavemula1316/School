import React from "react";
import Banner from "../components/Academics/Banner";
import Curriculum from "../components/Academics/Curriculum";
import Resources from "../components/Academics/Resources";
import Timetable from "../components/Academics/Timetable";
import Conduct from "../components/Academics/Conduct";

const Academics = () => {
  return (
    <div>
      <Banner />
      <Curriculum />
      <Resources />
      <Timetable />
      <Conduct />
    </div>
  );
};

export default Academics;
