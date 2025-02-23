import React from 'react'

export function SignUpVerify() {


    return (
        <div className="flex items-center justify-center p-8">
            <div className="bg-white border border-teal-700 p-8 rounded-2xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4">Verify Your Identity</h1>
                <p className="text-center text-gray-600 mb-6">
                    We’ve sent a One-Time Password (OTP) to your registered email/phone number.
                </p>

                <div className="flex justify-center space-x-3 mb-6">
                    <input type="text" maxLength={1} className="w-10 h-10 md:w-14 md:h-14 text-center text-xl border-2 border-gray-400 rounded-lg focus:outline-none focus:border-teal-700" />
                    <input type="text" maxLength={1} className="w-10 h-10 md:w-14 md:h-14 text-center text-xl border-2 border-gray-400 rounded-lg focus:outline-none focus:border-teal-700" />
                    <input type="text" maxLength={1} className="w-10 h-10 md:w-14 md:h-14 text-center text-xl border-2 border-gray-400 rounded-lg focus:outline-none focus:border-teal-700" />
                    <input type="text" maxLength={1} className="w-10 h-10 md:w-14 md:h-14 text-center text-xl border-2 border-gray-400 rounded-lg focus:outline-none focus:border-teal-700" />
                    <input type="text" maxLength={1} className="w-10 h-10 md:w-14 md:h-14 text-center text-xl border-2 border-gray-400 rounded-lg focus:outline-none focus:border-teal-700" />
                    <input type="text" maxLength={1} className="w-10 h-10 md:w-14 md:h-14 text-center text-xl border-2 border-gray-400 rounded-lg focus:outline-none focus:border-teal-700" />
                </div>

                <p className="text-center text-gray-600 italic mb-6">
                If you didn’t receive the OTP, you can:
                </p>

                <div className="flex justify-center space-x-8 mb-8">
                    <a href="#" className="text-teal-700 font-semibold hover:underline">Resend OTP</a>
                    <a href="#" className="text-teal-700 font-semibold hover:underline">Verify with Phone no.</a>
                </div>

                <button className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition duration-300">
                Verify
                </button>
            </div>
        </div>

                                )
}
