import ProductCategory from "@/components/ProductList/ProductCategory";
import AddressBar from "@/components/AddressBar";
import SecondaryHeading from "@/components/Heading/SecondaryHeading";
import CircularHomeCarousel from "@/components/Carousel/CircularHomeCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import SaleBanner from "@/components/ProductList/SaleBanner";
import ProductAutoScroll from "@/components/ProductList/ProductAutoScroll";
import FavoriteBrandsGrid from "@/components/ProductList/FavoriteBrandsGrid";
import ProductGrid from "@/components/ProductList/ProductGrid";
import Footer from "@/components/Footer";
import Product from "@/components/ProductList/Product";

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

export default function Home() {
  return (
    <div className="">
      <main className=" flex-col items-center justify-between">
        <div className="text-themePurpleText bg-white border ">
          <div
            class="flex items-center justify-between py-2 text-sm container"
            role="alert"
          >
            <div className="flex items-center w-full justify-end">
              <span class="sr-only">Info</span>
              {/* <div>
            <span class="font-medium">Info alert!</span> Change a few things up
            and try submitting again.
          </div> */}
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <FontAwesomeIcon
                  icon={faStar}
                  className="absolute -left-2 top-0 text-themePurpleText w-6 h-6"
                />
                <span class="bg-themeLightBgPurple pl-3 text-themePurpleText text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full  ">
                  150
                </span>
              </button>
              <button
                type="button"
                className="relative rounded-full p-1 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <span className="bg-red-400 text-white px-2 rounded-full text-[8px]  absolute -top-1 -right-2">
                  1
                </span>
                <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <AddressBar />
        <div className=" relative sm:container">
          <CircularHomeCarousel images={products} />
          <div className="bg-white absolute  left-0 w-full sm:container">
            <div className="flex justify-center items-center -mt-10 mb-8">
              <div
                class="button w-40 h-12 shining-element bg-purple-500 rounded-lg cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#7e22ce,0_15px_0_0_#1b70f841]
    border-b-[1px] border-purple-400
  "
              >
                <span class="flex flex-col justify-center items-center h-full text-white font-bold text-base ">
                  Slash the price
                </span>
              </div>
            </div>
            <div className="flex justify-between mx-4 sm:mx-0 rounded-lg items-start bg-gradient-to-b from-gray-200 to-white px-4 py-6">
              <div className="space-y-2 w-2/3">
                <p className="font-bold text-lg">august expo</p>
                <p className="text-[10px]">1ST - 31ST AUG</p>
              </div>
              <p className="text-xs">
                exclusive deals on homegrown brands at up to 80% off
              </p>
            </div>
            <div className="">
              <div className="w-full my-8">
                <SecondaryHeading />
                <Product />
              </div>
              <div className="h-2 w-full  bg-gray-100 shadow-inner"></div>
              <div className="w-full my-8">
                <SecondaryHeading />
                <Product />
              </div>
              <div className="h-2 w-full  bg-gray-100 shadow-inner"></div>
              <div className="w-full my-8">
                <SecondaryHeading />
                <ProductCategory />
              </div>
              <div className="h-2 w-full  bg-gray-100 shadow-inner"></div>
              <div className="w-full my-8">
                <SecondaryHeading />
                <Product />
              </div>
              <div className="h-2 w-full  bg-gray-100 shadow-inner"></div>
              <div className="w-full my-8">
                <SecondaryHeading />
                <SaleBanner data={products[0]} />
              </div>
              <div className="h-2 w-full  bg-gray-100 shadow-inner"></div>
              <div className="w-full my-8">
                <SecondaryHeading />
                <ProductAutoScroll />
              </div>
              <div className="h-2 w-full  bg-gray-100 shadow-inner"></div>
              <div className="w-full my-8">
                <SecondaryHeading />
                <Product />
              </div>
              <div className="h-2 w-full  bg-gray-100 shadow-inner"></div>
              <div className="w-full my-8">
                <SecondaryHeading />
                <FavoriteBrandsGrid data={products} />
              </div>
              <div className="h-2 w-full  bg-gray-100 shadow-inner"></div>
              <div className="w-full my-8">
                <SecondaryHeading />
                <ProductGrid />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
