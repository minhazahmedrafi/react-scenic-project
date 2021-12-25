import React from "react";
import "./serviceComp.scss";
import { AiOutlineBulb, AiOutlineFileSearch } from "react-icons/ai";
import { GiPencilRuler } from "react-icons/gi";
import { BsLaptop } from "react-icons/bs";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { IoRibbonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const ServiceComp = () => {
  return (
    <>
      <div className="serviceComp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contentHead text-center">
                <span>Our Services</span>
                <h2>SERVICES</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="singleService text-center">
                <div className="serviceIcon">
                  <GiPencilRuler className="icon" />
                </div>
                <div className="serviceContent">
                  <h3>Graphics Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit facilis, pariatur harum labore aperiam assumenda.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singleService text-center">
                <div className="serviceIcon">
                  <AiOutlineBulb className="icon" />
                </div>
                <div className="serviceContent">
                  <h3>Marketing Strategy</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit facilis, pariatur harum labore aperiam assumenda.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singleService text-center">
                <div className="serviceIcon">
                  <BsLaptop className="icon" />
                </div>
                <div className="serviceContent">
                  <h3>Web Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit facilis, pariatur harum labore aperiam assumenda.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singleService text-center">
                <div className="serviceIcon">
                  <AiOutlineFileSearch className="icon" />
                </div>
                <div className="serviceContent">
                  <h3>SEO</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit facilis, pariatur harum labore aperiam assumenda.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singleService text-center">
                <div className="serviceIcon">
                  <HiOutlinePresentationChartLine className="icon" />
                </div>
                <div className="serviceContent">
                  <h3>Market Leading </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit facilis, pariatur harum labore aperiam assumenda.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singleService text-center">
                <div className="serviceIcon">
                  <IoRibbonOutline className="icon" />
                </div>
                <div className="serviceContent">
                  <h3>Pixel Perfect Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit facilis, pariatur harum labore aperiam assumenda.
                  </p>
                </div>
              </div>
            </div>
            <div className="serviceViewAll text-center">
              <Link to="#" className="btn">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComp;
