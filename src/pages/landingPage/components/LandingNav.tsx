import React from 'react'
import appLogo from '../../../assets/appLogo.svg'
const LandingNav = () => {
  return (
    <div className="flex justify-between py-5 px-10">
      <img src={appLogo} alt=" " className="h-12 w-28" />
      <div className="flex gap-10 justify-between">
        <a className="text-torquoise h-10 w-32 rounded-xl font-bold flex justify-center items-center hover:bg-torquoise hover:text-white cursor-pointer">
          <span>Login</span>
        </a>
        <a className="bg-torquoise text-white h-10 w-32 rounded-xl font-bold flex justify-center items-center cursor-pointer">
          <span>Sign Up</span>
        </a>
      </div>
    </div>
  );
}

export default LandingNav
