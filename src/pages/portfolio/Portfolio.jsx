import React from "react";
import Header from "../../components/header/Header";
import "./portfolio.scss";
import PortfolioComp from "../../components/portfolio/PortfolioComp";
import Testimonials from "../../components/testimonials/Testimonials";
import Footer from "../../components/footer/Footer";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <Header
          path="#portfolioComp"
          hContent="PORTFOLIO"
          pContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam eveniet vitae mollitia nemo."
        />
        <PortfolioComp />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
