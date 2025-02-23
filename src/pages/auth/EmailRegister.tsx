import { Link } from "react-router-dom";

export function EmailRegister() {


  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

        <input type="email" placeholder="Enter Email Address" className="w-full px-4 py-2 mb-4 border border-teal-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />

          <div className="flex mb-4">
            <input type="text" value="+234"  className="w-16 px-4 py-2 border border-teal-700 rounded-l-lg bg-gray-100 text-center" />
              <input type="text" placeholder="xxxxxxxxxxxx" className="flex-grow px-4 py-2 border border-teal-700 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>

              <input type="password" placeholder="Password" className="w-full px-4 py-2 mb-4 border border-teal-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />

                <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 mb-4 border border-teal-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />

                  <div className="flex items-center mb-6">
                    <input type="checkbox" id="terms" className="w-5 h-5 text-teal-700 border-gray-300 rounded focus:ring-0" />
                      <label htmlFor="terms" className="ml-2 text-gray-700">I agree to the <a href="#" className="text-teal-700 hover:underline">terms & conditions</a></label>
                  </div>

                  <button className="w-full py-2 mb-4 bg-teal-700 hover:bg-teal-800 text-white rounded-lg transition duration-300">
                    Sign Up
                  </button>

                  <p className="text-center text-gray-700">Already have an account? <Link to="/auth/login" className="text-teal-700 font-semibold hover:underline">Sign In</Link></p>
                </div>
    </div>

              )
}
