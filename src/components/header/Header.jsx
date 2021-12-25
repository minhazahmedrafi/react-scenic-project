import React from "react";
import "./header.scss";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

const Header = ({ hContent, pContent, path }) => {
  return (
    <>
      <div className="header" id="header">
        <Navbar />
        <div className="headerContent">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>{hContent}</h1>
                <p className="mx-auto">{pContent}</p>
                <Link className="getInTouch" to="#">
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="downRoow">
        <a href={path}>
          <i class="fas fa-chevron-down"></i>
        </a>
      </div>
    </>
  );
};

export default Header;
