import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SecondaryHeading = () => {
  return (
    <div className="flex gap-2 mx-4 sm:mx-0 items-center justify-between mb-4">
      <h2 className="sm:text-lg text-base text-gray-600 font-bold">
        ShopPe special: for your first purchase
      </h2>
      <a
        href="#"
        className="hidden text-sm font-semibold text-themePurpleText hover:text-themeHoverPurple sm:block"
      >
        Browse all categories
        <span aria-hidden="true"> &rarr;</span>
      </a>
    </div>
  );
};

export default SecondaryHeading;
