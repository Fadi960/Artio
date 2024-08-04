import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../assets/google.svg';

const Login = ({ onForgotPasswordClick, onSignupClick }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/'); 
  };

  return (
    <div className="flex flex-col items-center justify-center font-[rubik,sans-serif] space-y-8 text-center text-white pt-8 px-4 sm:pt-16 sm:px-6 md:pt-24 md:px-8 lg:pt-32 lg:px-12 xl:pt-36 xl:px-20 2xl:pt-28 2xl:px-24 max-w-md xl:max-w-md 2xl:max-w-lg mx-auto">
      <h1 className="text-2xl font-bold sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Welcome back</h1>

      <button className="w-full py-2 px-4 bg-slate-700 rounded-md flex items-center justify-center space-x-2 hover:bg-slate-600 transition-colors duration-300">
        <img src={google} alt="Google" className="w-5 h-5" />
        <span className="text-sm sm:text-base xl:text-lg 2xl:text-xl">Continue with Google</span>
      </button>

      <div className="w-full text-lg xl:text-xl 2xl:text-2xl">
        <span>Or</span>
      </div>

      <form className="w-full space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 bg-slate-800 rounded-md text-sm sm:text-base xl:text-lg 2xl:text-xl"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-slate-800 rounded-md text-sm sm:text-base xl:text-lg 2xl:text-xl"
        />
        <Link
          to="/auth/forgot-password"
          className="text-sm sm:text-base xl:text-lg 2xl:text-xl text-gray-400 hover:text-gray-300 flex items-end justify-end"
          onClick={onForgotPasswordClick}
        >
          Forgot password
        </Link>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange-600 rounded-md text-sm sm:text-base xl:text-lg 2xl:text-xl hover:bg-orange-500 transition-colors duration-300"
        >
          Log in
        </button>
      </form>

      <p className="text-sm sm:text-base xl:text-lg 2xl:text-lg text-gray-400">
        Don't have an account? 
        <Link 
          to="/auth/signup" 
          onClick={onSignupClick} 
          className="text-white ml-1"
        >
          Sign up for free
        </Link>
      </p>
    </div>
  );
};

export default Login;
