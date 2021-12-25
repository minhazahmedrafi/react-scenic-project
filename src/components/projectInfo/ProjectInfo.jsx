import React from "react";
import "./projectinfo.scss";
import {
  AiOutlineDesktop,
  AiOutlineBulb,
  AiOutlineTrophy,
} from "react-icons/ai";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

const ProjectInfo = () => {
  return (
    <>
      <div className="projectsDone">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="singleInfo">
                <div className="topInfo">
                  <AiOutlineDesktop className="projectIcon" />
                  <span>2,393</span>
                </div>
                <p>Completed Projects</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="singleInfo">
                <div className="topInfo">
                  <AiOutlineBulb className="projectIcon" />
                  <span>54</span>
                </div>
                <p>Winners & Awards</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="singleInfo">
                <div className="topInfo">
                  <AiOutlineTrophy className="projectIcon" />
                  <span>120</span>
                </div>
                <p>Number of Team</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="singleInfo">
                <div className="topInfo">
                  <IoExtensionPuzzleOutline className="projectIcon" />
                  <span>550</span>
                </div>
                <p>Line of Codes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
