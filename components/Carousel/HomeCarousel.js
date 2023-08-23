import Image from "next/image";
import React from "react";

const HomeCarousel = () => {
  return (
    <div className="sm:container">
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
        <div className="backdrop-brightness-50 absolute top-0 left-0 w-full h-full"></div>
      </div>
    </div>
  );
};

export default HomeCarousel;
