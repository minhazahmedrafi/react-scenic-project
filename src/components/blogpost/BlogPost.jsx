import React from "react";
import images from "../../images/AAexports";
import "./blogpost.scss";
import { FaUserAlt, FaComment } from "react-icons/fa";
import { BsCalendar4 } from "react-icons/bs";

const BlogPost = () => {
  return (
    <>
      <div className="blogPost" id="blogPost">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contentHead text-center">
                <span>Read the latest post</span>
                <h2>BLOG POSTS</h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="singlePost bg-light">
                <div className="innerContent">
                  <div className="leftImage">
                    <img className="img-fluid" src={images.project01} alt="" />
                  </div>
                  <div className="rightContent">
                    <h3 className="mb-3">
                      <a href="#blog">Undefined: The Third Boolean Values</a>
                    </h3>
                    <hr />
                    <div className="commentPart">
                      <a href="#" className="user">
                        <FaUserAlt className="comIcon" />
                        <span>Jacob Smith</span>
                      </a>
                      <a href="#" className="date">
                        <BsCalendar4 className="comIcon" />
                        <span>7 Apr 2019</span>
                      </a>
                      <a href="#" className="comment">
                        <FaComment className="comIcon" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="singlePost bg-light">
                <div className="innerContent">
                  <div className="leftImage">
                    <img className="img-fluid" src={images.project02} alt="" />
                  </div>
                  <div className="rightContent">
                    <h3 className="mb-3">
                      <a href="#blog">Undefined: The Third Boolean Values</a>
                    </h3>
                    <hr />
                    <div className="commentPart">
                      <a href="#" className="user">
                        <FaUserAlt className="comIcon" />
                        <span>Jacob Smith</span>
                      </a>
                      <a href="#" className="date">
                        <BsCalendar4 className="comIcon" />
                        <span>7 Apr 2019</span>
                      </a>
                      <a href="#" className="comment">
                        <FaComment className="comIcon" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="singlePost bg-light">
                <div className="innerContent">
                  <div className="leftImage">
                    <img className="img-fluid" src={images.project06} alt="" />
                  </div>
                  <div className="rightContent">
                    <h3 className="mb-3">
                      <a href="#blog">Undefined: The Third Boolean Values</a>
                    </h3>
                    <hr />
                    <div className="commentPart">
                      <a href="#" className="user">
                        <FaUserAlt className="comIcon" />
                        <span>Jacob Smith</span>
                      </a>
                      <a href="#" className="date">
                        <BsCalendar4 className="comIcon" />
                        <span>7 Apr 2019</span>
                      </a>
                      <a href="#" className="comment">
                        <FaComment className="comIcon" />
                        <span>2</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="singlePost bg-light">
                <div className="innerContent">
                  <div className="leftImage">
                    <img className="img-fluid" src={images.project04} alt="" />
                  </div>
                  <div className="rightContent">
                    <h3 className="mb-3">
                      <a href="#blog">Undefined: The Third Boolean Values</a>
                    </h3>
                    <hr />
                    <div className="commentPart">
                      <a href="#" className="user">
                        <FaUserAlt className="comIcon" />
                        <span>Jacob Smith</span>
                      </a>
                      <a href="#" className="date">
                        <BsCalendar4 className="comIcon" />
                        <span>7 Apr 2019</span>
                      </a>
                      <a href="#" className="comment">
                        <FaComment className="comIcon" />
                        <span>2</span>
                      </a>
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

export default BlogPost;
