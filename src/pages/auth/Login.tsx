import { Link } from "react-router-dom";

export function Login() {

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

                <input type="email" placeholder="Enter Email Address" className="w-full px-4 py-2 mb-4 border border-teal-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />

                    <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-4 border border-teal-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />

                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center text-gray-700">
                                <input type="checkbox" className="w-5 h-5 text-teal-700 border-gray-300 rounded focus:ring-0" />
                                    <span className="ml-2">Remember me</span>
                            </label>
                            <a href="#" className="text-teal-700 hover:underline">Forgot password?</a>
                        </div>

                        <button 
                        
                         className="w-full py-2 mb-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition duration-300">
                            Sign In
                        </button>

                        <p className="text-center text-gray-700">Don’t have an account? <Link to="/auth" className="text-teal-700 font-semibold hover:underline">Sign Up</Link></p>
                    </div>
            </div>

    )
}
