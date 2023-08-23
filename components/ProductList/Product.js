"use client";
import { faChevronLeft, faChevronRight, faClock, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

const Product = () => {

  const router = useRouter();

  return (
    <div className="bg-white relative">
      <Swiper
        breakpoints={{
          640: { slidesPerView: 5},
        }}
        slidesPerView={1.5}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper first:px-4 sm:first:px-0"
      >
        {products.map((product) => (
          <SwiperSlide onClick={()=>router.push("/product-detail")}>
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 shadow-lg w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
                <div className=" absolute top-4  right-4 inline-block rounded-full text-white">
                  <FontAwesomeIcon className="w-5 h-5" icon={faHeart} />
                </div>
              </div>
              <h3 className="mt-4 text-sm text-gray-400">{product.name}</h3>
              <p className="mt-1 text-sm font-semibold text-gray-700">{product.name}</p>
              <div className="flex gap-4 items-center">
                <p className="mt-1 text-base font-bold text-gray-900">
                  {product.price}
                </p>
                <p className="mt-1 text-base text-gray-400 line-through">
                  {product.price}
                </p>
                <p className="mt-1 text-sm font-bold text-green-500">
                  {product.price}
                </p>
                
              </div>
              <div className=" text-white bg-themePurpleText mt-1 text-xs inline-block py-1 px-2">
                <div className="flex gap-2 items-center font-medium">
                  <div>
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <p className="uppercase">First Buy Offer</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <button className="arrow-left hidden sm:block arrow absolute cursor-pointer top-[45%] left-4 z-30">
        <span className="sr-only">Prev</span>
        <FontAwesomeIcon className="w-6 h-6 text-gray-400" icon={faChevronLeft}/>
      </button>
      <button className="arrow-right hidden sm:block arrow absolute top-[45%] cursor-pointer right-4 z-30">
        <span className="sr-only">next</span>
        <FontAwesomeIcon className="w-6 h-6 text-gray-400" icon={faChevronRight}/>
      </button> */}
    </div>
  );
}

export default Product;