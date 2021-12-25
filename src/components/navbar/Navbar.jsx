import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container">
          <Link class="navbar-brand" to="#">
            SCENIC
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link activeHome" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link activeAbout" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link activePortfolio" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Service Single
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Blog Single
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Portfolio Single
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link activeBlogs" to="/blogs">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link activeContact" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
