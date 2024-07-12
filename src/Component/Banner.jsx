import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import banner1 from "../../src/assets/banner1.jpg";
import banner2 from "../../src/assets/banner2.jpg";
import banner3 from "../../src/assets/banner3.jpg";
import banner4 from "../../src/assets/banner4.jpg";

const Banner = () => {


  const bannerArary = [banner1, banner2, banner3, banner4];
  return (
    <>
      <div className="z-0">
      <Swiper
        style={{
          height: "450px",
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          bannerArary.map((bannerImg, index) => <SwiperSlide className='w-full' key={index}>
            <img className='w-full' src={bannerImg} alt="bannerImage" />

          </SwiperSlide>)
        }

      </Swiper>
      </div>
    </>
  );
};

export default Banner;