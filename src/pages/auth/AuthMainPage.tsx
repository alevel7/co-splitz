import { Outlet } from 'react-router-dom';
import appSingleLogo from '../../assets/appsingleLogo.svg';
import signUpImage from '../../assets/signup_image.png';

export function AuthMainPage() {
    

    return (
        <div className='md:grid md:grid-cols-2 fixed inset-0'>
            <div className='hidden md:block' style={{ backgroundImage: `url(${signUpImage})`, backgroundSize: 'cover' }}>
            </div>
            <div className='p-10 flex items-center justify-center flex-col'>
                <img src={appSingleLogo} alt=" " className="h-12 w-28" />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
       
    )
}
