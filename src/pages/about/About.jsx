import React from "react";
import "./about.scss";
import Header from "../../components/header/Header";
import Webagency from "../../components/webagency/Webagency";
import AboutContent from "../../components/aboutContent/AboutContent";
import ProjectInfo from "../../components/projectInfo/ProjectInfo";
import Footer from "../../components/footer/Footer";
import OurTeam from "../../components/ourTeam/OurTeam";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <Header
          path="#webagency"
          hContent="ABOUT US"
          pContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veritatis dolorem ipsa assumenda?"
        />
        <Webagency />
        <AboutContent />
        <ProjectInfo />
        <OurTeam />

        <Footer />
      </div>
    </>
  );
};

export default About;
