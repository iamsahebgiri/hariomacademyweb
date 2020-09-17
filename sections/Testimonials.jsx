import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import config from '../content/site_config.json';
import ReviewItem from '../components/ReviewItem';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Testimonials() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="testimpnials-container">
      <h1 className="title">Our loving parents and students.</h1>
      <Swiper
        spaceBetween={40}
        pagination={{ clickable: true, dynamicBullets: true }}
        slidesPerView={width > 922 ? 3 : 1}
      >
        {config.site_testimonials.map((item) => (
          <SwiperSlide key={item.name}>
            <ReviewItem
              text={item.testimonial}
              name={item.name}
              course={item.course}
              path={item.avatar}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>
        {`
      .title {
        font-family: 'Rubik';
        font-weight: 500;
        font-size: 36px;
        color: #172B4D;
        text-align: center;
        padding: 40px 0;
      }
      .testimpnials-container {
        max-width: 1200px;
        margin: 0 auto;
        padding-bottom: 80px;
      }
      .swiper-container {
        padding: 20px !important;
      }
      @media only screen and (max-width: 992px) {
        .title {
          font-size: 28px;
          padding: 40px 20px;
        }
      }
      `}
      </style>
    </div>
  );
}
