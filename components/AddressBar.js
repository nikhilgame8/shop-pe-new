import { faEdit, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AddressBar = () => {
  return (
    <div className="text-themePurpleText bg-themeLightBgPurple">
      <div
        class="flex items-center justify-between py-4 text-sm container"
        role="alert"
      >
        <div className="flex items-start gap-2">
          <FontAwesomeIcon className="w-5 h-5" icon={faLocationDot} />
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Info alert!</span> Change a few things up
            and try submitting again.
          </div>
        </div>
        <div>
          <FontAwesomeIcon className="w-5 h-5 cursor-pointer" icon={faEdit} />
        </div>
      </div>
    </div>
  );
};

export default AddressBar;
