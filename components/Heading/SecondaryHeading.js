import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SecondaryHeading = () => {
  return (
    <div className="flex gap-2 mx-4 sm:mx-0 items-center my-4">
      <h2 className="text-base text-gray-600 font-bold">ShopPe special: for your first purchase</h2>
      <div className="font-semibold text-sm cursor-pointer flex gap-2 items-center"><FontAwesomeIcon className="w-4 h-4" icon={faArrowRight}/> </div>
    </div>
  );
};

export default SecondaryHeading;
