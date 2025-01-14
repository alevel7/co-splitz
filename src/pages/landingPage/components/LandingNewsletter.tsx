import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

const LandingNewsletter = () => {
  return (
    <div className="bg-torquoiseDark py-5 px-10 text-white">
      <div>
        <h3>
          <MdOutlineEmail />
          <span>Stay in the loop</span>
        </h3>
        <p>
          Never miss a beat with CoSplitz. Subscribe for updates,
          expense-sharing tips, and special offers.
        </p>
      </div>
      <div>
        <h3>Email</h3>
      </div>
    </div>
  );
}

export default LandingNewsletter
