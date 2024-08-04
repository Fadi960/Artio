import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    navigate('/auth/login'); 
  };

  return (
    <div className="flex flex-col items-center justify-center font-[rubik,sans-serif] space-y-10 text-center text-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20 2xl:px-4 2xl:py-3 2xl:pt-60 max-w-sm mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-xl 2xl:text-3xl font-bold">Recover Your Account</h1>

      <form className="w-full space-y-4" onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Email address"
          className="w-full p-3 bg-slate-800 rounded-md text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-orange-600 rounded-md text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-lg hover:bg-orange-500 transition-colors duration-300"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
