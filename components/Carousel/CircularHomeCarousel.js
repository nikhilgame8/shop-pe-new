'use client'

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-cube";
import { Autoplay, EffectCube, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CircularHomeCarousel = ({products}) => {
  return (
    <div>
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 bg-gradient-to-t from-gray-900 via-gray-900/40 opacity-50"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
            New arrivals are here
          </h1>
          <p className="mt-4 text-xl text-white">
            The new arrivals have, well, newly arrived. Check out the latest
            options from our summer small-batch release while they're still in
            stock.
          </p>
          {/* <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Shop New Arrivals
          </a> */}

          <div className=" flex justify-center items-center absolute top-0 left-0 w-full h-full">
            <div className="w-1/2 sm:w-3/5 bottom-10">
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                // pagination={true}
                modules={[EffectCube, Pagination, Autoplay]}
                className="mySwiper"
              >
                {products.map((product, index) => (
                  <SwiperSlide className="bg-themePurpleText sm:pb-8 pb-4 bg-opacity-50 border-2 border-white">
                    <div key={product.id} className="h-60">
                      <a
                        href={product.href}
                        className="group flex flex-col items-center "
                      >
                        <div className="w-36  h-36 -mt-20 mb-4 rounded-lg image-top-to-bottom-animate shadow-lg  overflow-hidden bg-gray-200">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                          />
                        </div>
                        <div className="uppercase mb-4 text-[8px] text-white bg-gray-700 inline-block px-1 border border-white">
                          Featured
                        </div>
                        <h3 className="mt-4 text-center sm:text-2xl text-lg text-gray-200 px-2">
                          {product.name}
                        </h3>
                        <p className="mt-1 sm:text-4xl text-lg text-center font-semibold text-white px-2">
                          {product.name}
                        </p>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="absolute container left-0  flex justify-center items-center -mt-10 mb-8">
          <div
            className="button inline-block px-8 py-3 text-base h-12 shining-element bg-purple-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#7e22ce,0_15px_0_0_#1b70f841]
    border-b-[1px] border-purple-400
  "
          >
            <span className="flex flex-col justify-center items-center h-full text-white font-bold text-base ">
              Slash the price
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularHomeCarousel;
