import React from "react";
import images from "../../images/AAexports";
import Socials from "../socials/Socials";
import "./ourteam.scss";

const OurTeam = () => {
  return (
    <>
      <div className="ourTeam">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contentHead text-center">
                <span>Our Team</span>
                <h2>TEAM</h2>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-6">
              <div className="singlePerson">
                <div className="personImg">
                  <img className="img-fluid" src={images.team01} alt="" />
                </div>
                <div className="personContent">
                  <h3 className="pt-3">Elisabeth Smith</h3>
                  <p className="text-muted">Creative Director</p>
                  <p className="lead">
                    Odio nihil facilis vitae laudantium provident magni alias
                    veniam quidem voluptatum
                  </p>
                  <p style={{ color: "#7f848c" }}>
                    Soluta quasi cum delectus eum facilis recusandae nesciunt
                    molestias accusantium libero dolores repellat id in dolorem
                    laborum ad modi qui at quas dolorum voluptatem voluptatum
                    repudiandae voluptatibus ut? Ex vel ad explicabo iure ipsa
                    possimus consectetur neque rem molestiae eligendi velit?.
                  </p>
                  <Socials />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="singlePerson">
                <div className="personImg">
                  <img className="img-fluid" src={images.team02} alt="" />
                </div>
                <div className="personContent">
                  <h3 className="pt-3">Chintan Patel</h3>
                  <p className="text-muted">Creative Director</p>
                  <p className="lead">
                    Odio nihil facilis vitae laudantium provident magni alias
                    veniam quidem voluptatum
                  </p>
                  <p style={{ color: "#7f848c" }}>
                    Soluta quasi cum delectus eum facilis recusandae nesciunt
                    molestias accusantium libero dolores repellat id in dolorem
                    laborum ad modi qui at quas dolorum voluptatem voluptatum
                    repudiandae voluptatibus ut? Ex vel ad explicabo iure ipsa
                    possimus consectetur neque rem molestiae eligendi velit?.
                  </p>
                  <Socials />
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-4">
              <div className="singlePerson">
                <div className="personImg">
                  <img className="img-fluid" src={images.team03} alt="" />
                </div>
                <div className="personContent">
                  <h3 className="pt-3">Elisabeth Smith</h3>
                  <p className="text-muted">Creative Director</p>
                  <p className="lead">
                    Odio nihil facilis vitae laudantium provident magni alias
                    veniam quidem voluptatum
                  </p>
                  <p style={{ color: "#7f848c" }}>
                    Soluta quasi cum delectus eum facilis recusandae nesciunt
                    molestias accusantium libero dolores repellat id in dolorem
                    laborum ad modi qui at quas dolorum voluptatem voluptatum
                    repudiandae voluptatibus ut? Ex vel ad explicabo iure ipsa
                    possimus consectetur neque rem molestiae eligendi velit?.
                  </p>
                  <Socials />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singlePerson">
                <div className="personImg">
                  <img className="img-fluid" src={images.team04} alt="" />
                </div>
                <div className="personContent">
                  <h3 className="pt-3">Chintan Patel</h3>
                  <p className="text-muted">Creative Director</p>
                  <p className="lead">
                    Odio nihil facilis vitae laudantium provident magni alias
                    veniam quidem voluptatum
                  </p>
                  <p style={{ color: "#7f848c" }}>
                    Soluta quasi cum delectus eum facilis recusandae nesciunt
                    molestias accusantium libero dolores repellat id in dolorem
                    laborum ad modi qui at quas dolorum voluptatem voluptatum
                    repudiandae voluptatibus ut? Ex vel ad explicabo iure ipsa
                    possimus consectetur neque rem molestiae eligendi velit?.
                  </p>
                  <Socials />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singlePerson">
                <div className="personImg">
                  <img className="img-fluid" src={images.team05} alt="" />
                </div>
                <div className="personContent">
                  <h3 className="pt-3">Jean Doe</h3>
                  <p className="text-muted">Creative Director</p>
                  <p className="lead">
                    Odio nihil facilis vitae laudantium provident magni alias
                    veniam quidem voluptatum
                  </p>
                  <p style={{ color: "#7f848c" }}>
                    Soluta quasi cum delectus eum facilis recusandae nesciunt
                    molestias accusantium libero dolores repellat id in dolorem
                    laborum ad modi qui at quas dolorum voluptatem voluptatum
                    repudiandae voluptatibus ut? Ex vel ad explicabo iure ipsa
                    possimus consectetur neque rem molestiae eligendi velit?.
                  </p>
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
