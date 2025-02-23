
import { Link } from 'react-router-dom';
import appLogo from '../../../assets/appLogo.svg';

const LandingNav = () => {
  return (
    <div className="flex justify-between items-center md:py-5 md:px-10">
      <img src={appLogo} alt=" " className="h-12 w-28" />
      <div className="flex gap-10 justify-between">
        <Link to="/auth/login" className="text-torquoise h-10 w-32 rounded-xl font-bold flex justify-center items-center hover:bg-torquoise hover:text-white cursor-pointer">
          <span>Login</span>
        </Link>
        <Link to="/auth" className="bg-torquoise text-white h-10 w-32 rounded-xl font-bold flex justify-center items-center cursor-pointer">
          <span>Sign Up</span>
        </Link>
      </div>
    </div>
  );
}

export default LandingNav
