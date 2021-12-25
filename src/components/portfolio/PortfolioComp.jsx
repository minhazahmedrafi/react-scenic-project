import React from "react";
import "./PortfolioComp.scss";
import projects from "./ProjectData";
import { AiOutlinePlus } from "react-icons/ai";

const PortfolioComp = () => {
  return (
    <>
      <div className="portfolioComp" id="portfolioComp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contentHead text-center">
                <span>Awesome Works</span>
                <h2>PORTFOLIO</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="projects pt-3">
                <ul
                  className="nav nav-pills justify-content-center mb-5"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-all-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-all"
                      type="button"
                      role="tab"
                      aria-controls="pills-all"
                      aria-selected="true"
                    >
                      ALL
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-web-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-web"
                      type="button"
                      role="tab"
                      aria-controls="pills-web"
                      aria-selected="false"
                    >
                      WEB
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-design-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-design"
                      type="button"
                      role="tab"
                      aria-controls="pills-design"
                      aria-selected="false"
                    >
                      DESIGN
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-brand-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-brand"
                      type="button"
                      role="tab"
                      aria-controls="pills-brand"
                      aria-selected="false"
                    >
                      BRAND
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-all"
                    role="tabpanel"
                    aria-labelledby="pills-all-tab"
                  >
                    <div className="row">
                      {projects.map((project) => (
                        <div className="col-lg-4">
                          <div className="singleProject">
                            <img
                              className="img-fluid"
                              src={project.image}
                              alt=""
                            />
                            <div className="imgOverlay">
                              <AiOutlinePlus className="ovIcon" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-web"
                    role="tabpanel"
                    aria-labelledby="pills-web-tab"
                  >
                    <div className="row">
                      {projects.map((project) =>
                        project.tag === "web" ? (
                          <div className="col-lg-4">
                            <div className="singleProject">
                              <img
                                className="img-fluid"
                                src={project.image}
                                alt=""
                              />
                              <div className="imgOverlay">
                                <AiOutlinePlus className="ovIcon" />
                              </div>
                            </div>
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-design"
                    role="tabpanel"
                    aria-labelledby="pills-design-tab"
                  >
                    <div className="row">
                      {projects.map((project) =>
                        project.tag === "design" ? (
                          <div className="col-lg-4">
                            <div className="singleProject">
                              <img
                                className="img-fluid"
                                src={project.image}
                                alt=""
                              />
                              <div className="imgOverlay">
                                <AiOutlinePlus className="ovIcon" />
                              </div>
                            </div>
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-brand"
                    role="tabpanel"
                    aria-labelledby="pills-brand-tab"
                  >
                    <div className="row">
                      {projects.map((project) =>
                        project.tag === "brand" ? (
                          <div className="col-lg-4">
                            <div className="singleProject">
                              <img
                                className="img-fluid"
                                src={project.image}
                                alt=""
                              />
                              <div className="imgOverlay">
                                <AiOutlinePlus className="ovIcon" />
                              </div>
                            </div>
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioComp;
