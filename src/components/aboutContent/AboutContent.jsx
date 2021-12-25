import React from "react";
import { Link } from "react-router-dom";
import images from "../../images/AAexports";
import "./aboutcontent.scss";

const AboutContent = () => {
  return (
    <>
      <div className="aboutContent" id="aboutContent">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contentLeft">
                <div className="contentHead">
                  <span>About Us</span>
                  <h2>WHO ARE YOU GUYS</h2>
                </div>
                <div className="innerContent">
                  <p>
                    Soluta quasi cum delectus eum facilis recusandae nesciunt
                    molestias accusantium libero dolores repellat id in dolorem
                    laborum ad modi qui at quas dolorum voluptatem voluptatum
                    repudiandae.
                  </p>
                  <p>
                    Soluta quasi cum delectus eum facilis recusandae nesciunt
                    molestias accusantium libero dolores repellat id in dolorem
                    laborum ad modi qui at quas dolorum voluptatem voluptatum
                    repudiandae.
                  </p>
                  <Link to="#">READ MORE ABOUT US</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contentRight">
                <div className="innerContent">
                  <img className="img-fluid" src={images.about01} alt="" />
                  <img
                    className="img-fluid overlayImg"
                    src={images.about02}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
