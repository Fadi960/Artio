import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import ForgotPassword from '../components/auth/ForgotPassword';

const Auth = () => {
  return (
    <div className="min-h-screen bg-[#12151e]">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default Auth;
