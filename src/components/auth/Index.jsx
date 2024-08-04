import React, { useState } from 'react';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [view, setView] = useState('login'); // Possible values: 'login', 'forgotPassword', 'signup'
  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    setView('forgotPassword');
    navigate('/auth/forgot-password');
  };

  const handleSignupClick = () => {
    setView('signup');
    navigate('/auth/signup');
  };

  const handleSignupSuccess = () => {
    setView('login');
    navigate('/auth/login');
  };

  return (
    <div className="w-full">
      {view === 'login' && <Login onForgotPasswordClick={handleForgotPasswordClick} onSignupClick={handleSignupClick} />}
      {view === 'forgotPassword' && <ForgotPassword />}
      {view === 'signup' && <Signup onSignupSuccess={handleSignupSuccess} />}
    </div>
  );
};

export default Index;
