import React from "react";
import images from "../../images/AAexports";
import "./webagency.scss";
import { BsFillPlayFill } from "react-icons/bs";

const Webagency = () => {
  return (
    <>
      <div className="webagency" id="webagency">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="leftAgency">
                <img className="img-fluid" src={images.project06} alt="" />
                <div className="videoPlay">
                  <BsFillPlayFill />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rightAgency">
                <div className="contentHead mb-3">
                  <span>Watch the video</span>
                  <h2>WE ARE WEB AGENCY</h2>
                </div>
                <div className="innerContent">
                  <p className="lead">
                    Eveniet voluptatibus voluptates suscipit minima, cum
                    voluptatum ut dolor, sed facere corporis qui, ea quisquam
                    quis odit minus nulla vitae. Sit, voluptatem.
                  </p>
                  <p>
                    Ipsum harum assumenda in eum vel eveniet numquam, cumque
                    vero vitae enim cupiditate deserunt eligendi officia modi
                    consectetur. Expedita tempora quos nobis earum hic ex
                    asperiores quisquam optio nostrum sit!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webagency;
