"use client";

import { Carousel } from "flowbite-react";
import React from "react";

const LandingTestimonials = () => {
  return (
    <div className="py-5 px-10 bg-torquoiseLight flex flex-col justify-center items-center">
      <h3 className="text-3xl font-bold">
        Experience Effortless cost splitting
      </h3>
      <p className="font-medium mb-10">
        Our app simplifies cost sharing, leveling up your expense management
        with ease.
      </p>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-4/5">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default LandingTestimonials;
