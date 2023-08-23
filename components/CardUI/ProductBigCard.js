import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const ProductBigCard = ({ product }) => {
  return (
    <div className="relative shadow">
      <a className="group">
        <div className="relative w-[350px] h-[245px]">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-gray-900/40">
          <div className="p-4 flex flex-col justify-between h-full">
            <h3 className="mt-4 text-2xl font-bold text-gray-700">
              {product.name}
            </h3>
            <div>
              <p className="mt-1 text-sm text-white">{product.name}</p>
              <div className="flex justify-between items-center">
                <p className="mt-1 font-semibold text-2xl text-themePurpleText">
                  {product.price} <span className="line-through ml-2 font-medium text-base text-gray-300">{product.price}</span>
                </p>
                {/* <div className="bg-gray-300 inline-block p-2 rounded-full text-white">
                  <FontAwesomeIcon className="w-4 h-4" icon={faHeart} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductBigCard;
