import React from "react";
import images from "../../images/AAexports";
import "./testimonials.scss";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay]);

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contentHead text-center">
                <span>Testimonials</span>
                <h2>HAPPY PEOPLE SAYS</h2>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <Swiper
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              <div className="col-lg-6">
                <SwiperSlide>
                  <div className="singleReview bg-light">
                    <p className="review">
                      <ImQuotesLeft className="quote" />
                      Ipsum harum assumenda in eum vel eveniet numquam cumque
                      vero vitae enim cupiditate deserunt eligendi officia modi
                      consectetur. Expedita tempora quos nobis earum hic ex
                      asperiores quisquam optio nostrum sit
                    </p>
                    <div className="clientUser">
                      <div className="left">
                        <img
                          className=" img-fluid"
                          src={images.team05}
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h4>Elisabeth Smith</h4>
                        <span className="text-muted">Creative Director</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="col-lg-6">
                <SwiperSlide>
                  <div className="singleReview bg-light">
                    <p className="review">
                      <ImQuotesLeft className="quote" />
                      Ipsum harum assumenda in eum vel eveniet numquam cumque
                      vero vitae enim cupiditate deserunt eligendi officia modi
                      consectetur. Expedita tempora quos nobis earum hic ex
                      asperiores quisquam optio nostrum sit
                    </p>
                    <div className="clientUser">
                      <div className="left">
                        <img
                          className=" img-fluid"
                          src={images.team04}
                          alt=""
                        />
                      </div>
                      <div className="right">
                        <h4>Chris Peter</h4>
                        <span className="text-muted">Web Designer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
