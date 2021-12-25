import React from "react";
import "./home.scss";
import Header from "../../components/header/Header";
import AboutContent from "../../components/aboutContent/AboutContent";
import ServiceComp from "../../components/serviceComp/ServiceComp";
import PortfolioComp from "../../components/portfolio/PortfolioComp";
import BlogPost from "../../components/blogpost/BlogPost";
import Webagency from "../../components/webagency/Webagency";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <Header
          path="#aboutContent"
          hContent="WE ARE SCENIC"
          pContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quibusdam possimus quasi porro! Itaque?"
        />
        <AboutContent />
        <ServiceComp />
        <PortfolioComp />
        <Webagency />
        <BlogPost />
        <Footer />
      </div>
    </>
  );
};

export default Home;
