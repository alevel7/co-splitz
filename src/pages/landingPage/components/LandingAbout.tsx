import React from 'react'
import RectanglePhone from "../../../assets/Rectangle.svg"
const LandingAbout = () => {
  return (
    <div className="bg-torquoiseLight flex mt-10">
      <div className="w-full px-10 pt-20 pb-5 flex flex-col gap-10">
        <h3 className="font-bold text-2xl">CoSplitz Goes Mobile Soon! </h3>
        <p className="font-medium">
          We're working on our Android and iOS apps to bring the Splitz
          experience to your fingertips. In the meantime, our web app offers all
          the tools you need to split, shop, and save seamlessly.
        </p>
        <button
          type="button"
          className="bg-torquoise text-white h-12 w-36 rounded-xl font-bold flex justify-center items-center cursor-pointer"
        >
          Get Started
        </button>
      </div>
      <div className="w-full">
        <img src={RectanglePhone} className='h-96'/>
      </div>
    </div>
  );
}

export default LandingAbout
