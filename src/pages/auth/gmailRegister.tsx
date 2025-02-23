import { useNavigate } from "react-router-dom";


export function GmailRegister() {
    const navigate = useNavigate();



    return (
    <div className=" flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl w-full max-w-sm">
            <h1 className="text-2xl font-bold text-center mb-2">Sign in or create an account</h1>
            <p className="text-center text-gray-600 mb-6">Choose your preferred method to get started:</p>

            <button onClick={() => navigate('/auth/email')} className="flex items-center justify-center w-full py-2 mb-4 bg-teal-700 hover:bg-teal-800 text-white rounded-lg transition duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail Icon" className="w-5 h-5 mr-2" />
            Sign in with Email
            </button>

            <button className="flex items-center justify-center w-full py-2 mb-4 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-100 transition duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Icon" className="w-5 h-5 mr-2" />
            Sign in with Apple
            </button>

            <button className="flex items-center justify-center w-full py-2 mb-4 bg-teal-700 hover:bg-teal-800 text-white rounded-lg transition duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google Icon" className="w-5 h-5 mr-2" />
            Sign in with Google
            </button>

            <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">Or</span>
            <hr className="flex-grow border-gray-300" />
            </div>

            <button 
            onClick={() => navigate('/auth/email')}
            className="w-full py-2 border border-teal-700 text-teal-700 rounded-lg hover:bg-teal-50 transition duration-300">
            Create your account
            </button>
        </div>
    </div>

    )
}
