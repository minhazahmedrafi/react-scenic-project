import React from "react";
import "./socials.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <>
      <div>
        <ul className="footerLinks footerSocials">
          <li>
            <Link to="#">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaLinkedinIn />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Socials;
