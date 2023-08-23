"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CarouselTest = () => {
  return (
    <div className="relative">
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <div className="relative w-full h-[500px]">
                <Image
                  src={
                    "https://res.cloudinary.com/pollpe-in/image/upload/v1685808325/blog_6_lnmvwk.jpg"
                  }
                  alt="shopPe"
                  fill
                  priority={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="bg-gradient-to-t from-gray-900 via-gray-900/40 absolute top-0 left-0 w-full h-full"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <div className="relative w-full h-[500px]">
                <Image
                  src={
                    "https://res.cloudinary.com/pollpe-in/image/upload/v1685808325/blog_6_lnmvwk.jpg"
                  }
                  alt="shopPe"
                  fill
                  priority={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="bg-gradient-to-t from-gray-900 via-gray-900/40 absolute top-0 left-0 w-full h-full"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <button className="arrow-left arrow absolute top-[45%] left-4 z-30">
        <span className="sr-only">Prev</span>
        <FontAwesomeIcon className="w-6 h-6 text-gray-400" icon={faChevronLeft}/>
      </button>
      <button className="arrow-right arrow absolute top-[45%] right-4 z-30">
        <span className="sr-only">next</span>
        <FontAwesomeIcon className="w-6 h-6 text-gray-400" icon={faChevronRight}/>
      </button>
    </div>
  );
};

export default CarouselTest;
