import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "../components/Navbar";
import Salute from "../components/Salute";
import About from "../components/About";
import Education from "../components/Education";
import LaboralExperience from "../components/LaboralExperience";
import MyStack from "../components/MyStack";

export const MainLayout = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Salute />
      <div className="grid" data-aos="fade-right">
        <About />
        <Education />
        <LaboralExperience />
        <MyStack />
      </div>
    </>
  );
};
