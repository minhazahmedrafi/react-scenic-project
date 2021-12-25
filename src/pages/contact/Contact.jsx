import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./contact.scss";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <Header
          hContent="CONTACT US"
          pContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet ab laboriosam asperiores commodi."
        />
        <div className="contactForm">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <label for="exampleInputfName" class="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label for="exampleInputfName" class="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <label for="exampleInputEmail1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div>
                    <label for="exampleInputSubject" class="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-4">
                    <label for="exampleInputPassword1" class="form-label">
                      Message
                    </label>
                    <textarea
                      rows={7}
                      placeholder="Write your notes or questions here..."
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="contactInfo">
                  <div className="singleInfo">
                    <p className="infoHead">Address</p>
                    <p className="infoAdd text-muted">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </p>
                  </div>
                  <div className="singleInfo">
                    <p className="infoHead">Phone</p>
                    <a href="tel:+12323235324" className="infoAdd">
                      +1 232 3235 324
                    </a>
                  </div>
                  <div className="singleInfo">
                    <p className="infoHead">Email Address</p>
                    <a href="mailto:youremail@domain.com" className="infoAdd">
                      youremail@domain.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
