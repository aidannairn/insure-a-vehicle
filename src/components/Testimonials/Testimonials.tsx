import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // Navigation module
import 'swiper/css/pagination';
import { Pagination, Navigation } from "swiper";
import "./Testimonial.css";
import testimonial1Img from "../../images/testimonial1.png";
import testimonial2Img from "../../images/testimonial2.png";
import testimonial3Img from "../../images/testimonial3.png";
import quoteIco from "../../images/Get Quote.png";

interface TestimonialsProps {}

export const Testimonials: React.FC<TestimonialsProps> = ({}) => {
  return (
    <div className="testimonial-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          totalClass: 'swiper-pagination-total',
          type: "bullets"
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="testimonial1">
            <div className="testimonial-img">
              <img src={testimonial1Img} />
            </div>
            <div className="testimonial-text">
              <div className="user-detail">
                <p>Emily Roberts</p>
                <cite>Hamilton</cite>
              </div>
              <div className="quote-text">
                <img src={quoteIco} className="quoteIco" />
                <h2>My Turners agent was so helpful... Thank you!</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                <br />
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                <br />
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
                <br />
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                <br />
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                <br />
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="testimonial2">
            <div className="testimonial-img">
              <img src={testimonial2Img} />
            </div>
            <div className="testimonial-text">
              <div className="user-detail">
                <p>Robert Grant</p>
                <cite>Auckland</cite>
              </div>
              <div className="quote-text">
                <img src={quoteIco} className="quoteIco" />
                <h2>I insured my whole family in a few clicks!</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                <br />
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                <br />
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
                <br />
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                <br />
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                <br />
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="testimonial3">
            <div className="testimonial-img">
              <img src={testimonial3Img} />
            </div>
            <div className="testimonial-text">
              <div className="user-detail">
                <p>Elvis Mundt</p>
                <cite>Tauranga</cite>
              </div>
              <div className="quote-text">
                <img src={quoteIco} className="quoteIco" />
                <h2>Getting insurance was so easy!</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                <br />
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                <br />
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
                <br />
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                <br />
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                <br />
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
