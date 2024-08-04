import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/google.svg';

const Signup = ({ onSignupSuccess }) => {
  return (
    <div className="flex flex-col items-center justify-center font-[rubik,sans-serif] space-y-8 text-center text-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20 2xl:pt-28 max-w-md xl:max-w-lg mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-3xl font-bold">Create Your Account</h1>

      <button className="w-full py-2 px-4 bg-slate-700 rounded-md flex items-center justify-center space-x-2 hover:bg-slate-600 transition-colors duration-300">
        <img src={google} alt="Google" className="w-5 h-5" />
        <span className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl">Continue with Google</span>
      </button>

      <div className="w-full text-lg xl:text-xl 2xl:text-2xl">
        <span>Or</span>
      </div>

      <form className="w-full space-y-4" onSubmit={(e) => { e.preventDefault(); onSignupSuccess(); }}>
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 bg-slate-800 rounded-md text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-slate-800 rounded-md text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange-600 rounded-md text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl hover:bg-orange-500 transition-colors duration-300"
        >
          Continue
        </button>
      </form>

      <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg text-gray-400">
        Already have an account? 
        <Link to="/auth/login" className="text-white ml-1">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
