import React from 'react'
import { IoIosPeople } from "react-icons/io";
import { HiCash } from "react-icons/hi";
import { FaRegCreditCard } from "react-icons/fa";
import { HiChartSquareBar } from "react-icons/hi";

const LandingFeatures = () => {
  return (
    <div className="w-4/5 m-auto flex flex-col justify-center items-center gap-5 p-10">
      <h3 className="text-3xl font-bold">Let’s show you how it works</h3>
      <p className="font-medium">
        Our app simplifies cost sharing, leveling up your expense management
        with ease.
      </p>
      <div className="grid grid-cols-2 gap-4 ">
        <section className="bg-[#FFF0D4] rounded-xl p-10 border border-solid border-black">
          <IoIosPeople className="text-2xl" />
          <h4>Start a CoSplitz Group</h4>
          <p>
            Start by creating a group for your shared expenses or purchases.
            Invite your friends or family to collaborate easily.
          </p>
        </section>
        <section className="bg-[#EBE6FF] rounded-xl p-10 border border-solid border-black">
          <HiCash className="text-2xl" />
          <h4>Split Expenses</h4>
          <p>
            Add expenses or shop directly from the Marketplace. Easily split
            costs, vote on purchases, and adjust contributions in real-time.
          </p>
        </section>
        <section className="bg-[#D0FDFB] rounded-xl p-10 border border-solid border-black">
          <FaRegCreditCard className="text-2xl" />
          <h4>Pay your Way</h4>
          <p>
            Settle your share with fiat or cryptocurrency—whichever works best
            for you. Secure payments, automatic currency conversion, and instant
            updates make it seamless.
          </p>
        </section>
        <section className="bg-[#FEE5F0] rounded-xl p-10 border border-solid border-black">
          <HiChartSquareBar className="text-2xl" />

          <h4>Track and Enjoy</h4>
          <p>
            Keep track of all contributions, payments, and deliveries in one
            place. Transparency and convenience, every step of the way.
          </p>
        </section>
      </div>
    </div>
  );
}

export default LandingFeatures
