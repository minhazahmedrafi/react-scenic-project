import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

import { IoIosArrowUp } from "react-icons/io";
import Socials from "../socials/Socials";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="singleFooter">
                <h3>Scenic Products</h3>
                <ul className="footerLinks">
                  <li>
                    <Link to="#">Web Design</Link>
                  </li>
                  <li>
                    <Link to="#">Graphic Design</Link>
                  </li>
                  <li>
                    <Link to="#">Web Developers</Link>
                  </li>
                  <li>
                    <Link to="#">Resources</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="singleFooter">
                <h3>Company</h3>
                <ul className="footerLinks">
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Career</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                  <li>
                    <Link to="#">Resources</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="singleFooter">
                <h3>Support</h3>
                <ul className="footerLinks">
                  <li>
                    <Link to="#">Support</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy</Link>
                  </li>
                  <li>
                    <Link to="#">Terms of Service</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="singleFooter">
                <h3>Contact Us</h3>
                <Socials />
              </div>
            </div>
          </div>
          <div className="row pt-5 text-center">
            <div className="col-12">
              <div className="copyright">
                <p>
                  Copyright ©2021 All rights reserved | This template is made
                  with by{" "}
                  <a
                    href="https://coderminhaz.netlify.app/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    coderminhaz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footerArrow">
          <a href="#header" className="footerUp">
            <IoIosArrowUp />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
