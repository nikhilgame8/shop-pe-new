"use client";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-cube";
import SecondaryHeading from "@/components/Heading/SecondaryHeading";
import Product from "@/components/ProductList/Product";
import CircularHomeCarousel from "@/components/Carousel/CircularHomeCarousel";
import AddressBar from "@/components/AddressBar";
import ProductCategory from "@/components/ProductList/ProductCategory";
import ProductAutoScroll from "@/components/ProductList/ProductAutoScroll";
import FavoriteBrandsGrid from "@/components/ProductList/FavoriteBrandsGrid";
import ProductGrid from "@/components/ProductList/ProductGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSlideModel from "@/components/ModelUI/CartSlideModel";
import { useState } from "react";

const collections = [
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
  {
    name: "Focus Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
  },
];
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
  // More products...
];

const page = () => {

  const [viewCart, setViewCart] = useState(false);


  return (
    <div className="bg-white">
      <Navbar setViewCart={setViewCart} />
      <CartSlideModel show={viewCart} setShow={setViewCart} />
      <AddressBar />
      <CircularHomeCarousel products={products} />
      <main className="mt-12 sm:mt-16">
        <div className="container">
          <div className="flex justify-between rounded-lg px-4 items-start bg-gradient-to-b from-gray-200 to-white py-6">
            <div className="space-y-2 w-2/3">
              <p className="font-bold text-lg">august expo</p>
              <p className="text-[10px]">1ST - 31ST AUG</p>
            </div>
            <p className="text-xs">
              exclusive deals on homegrown brands at up to 80% off
            </p>
          </div>
        </div>
        {/* Category section */}
        <section
          aria-labelledby="category-heading"
          className="py-4 sm:container"
        >
          <SecondaryHeading />
          <Product />
        </section>

        <div className="h-2 w-full my-8  bg-gray-100 shadow-inner"></div>

        <section
          aria-labelledby="category-heading"
          className="py-4 sm:container"
        >
          <SecondaryHeading />
          <Product />
        </section>
        <div className="h-2 w-full my-8  bg-gray-100 shadow-inner"></div>
        <section
          aria-labelledby="category-heading"
          className="py-4 sm:container"
        >
          <SecondaryHeading />
          <ProductCategory />
        </section>
        <div className="h-2 w-full my-8  bg-gray-100 shadow-inner"></div>

        <section
          aria-labelledby="category-heading"
          className="py-4 sm:container"
        >
          <SecondaryHeading />
          <Product />
        </section>

        {/* Featured section */}
        <div className="h-2 w-full my-8  bg-gray-100 shadow-inner"></div>
        <section
          aria-labelledby="social-impact-heading"
          className="container py-4"
        >
          <SecondaryHeading />
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2
                  id="social-impact-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  <span className="block sm:inline">Level up</span>
                  <span className="block sm:inline">your desk</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                  Make your desk beautiful and organized. Post a picture to
                  social media and watch it get more likes than life-changing
                  announcements. Reflect on the shallow nature of existence. At
                  least you have a really nice desk setup.
                </p>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Shop Workspace
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="h-2 w-full my-8  bg-gray-100 shadow-inner"></div>
        <section
          aria-labelledby="category-heading"
          className="py-4 sm:container"
        >
          <SecondaryHeading />
          <ProductAutoScroll />
        </section>

        {/* <div className="h-2 w-full my-8  bg-gray-100 shadow-inner"></div> */}
        {/* Collection section */}
        {/* <section
          aria-labelledby="collection-heading"
          className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
        >
          <h2
            id="collection-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Shop by Collection
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Each season, we collaborate with world-class designers to create a
            collection inspired by the natural world.
          </p>

          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {collections.map((collection) => (
              <a
                key={collection.name}
                href={collection.href}
                className="group block"
              >
                <div
                  aria-hidden="true"
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                >
                  <img
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {collection.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {collection.description}
                </p>
              </a>
            ))}
          </div>
        </section> */}
        <div className="h-2 w-full my-8  bg-gray-100 shadow-inner"></div>
        <section
          aria-labelledby="category-heading"
          className="py-4 sm:container"
        >
          <SecondaryHeading />
          <FavoriteBrandsGrid data={products} />
        </section>
        <div className="h-2 w-full my-8  bg-gray-100 shadow-inner"></div>
        <section
          aria-labelledby="category-heading"
          className="py-4 sm:container"
        >
          <SecondaryHeading />
          <ProductGrid />
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default page;
