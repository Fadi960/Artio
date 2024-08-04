import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo/artio.png';

const Header = () => {
  return (
    <header className="bg-[#12151e] font-[Rubik,sans-serif] text-base leading-6 text-left">
      <div className="mx-auto flex max-w-7xl ml-auto sm:ml-44 md:ml-8 xl:ml-44 mr-auto items-center justify-between px-4 py-3 sm:px-6 sm:py-6  ">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Artio Logo" className="h-8 w-8 mr-2" />
            <span className="text-white font-bold text-xl">ARTIO</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-10">
          <Link to="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
          <Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link>
          <Link to="/search" className="text-gray-300 hover:text-white">Search</Link>
          <Link to="/faq" className="text-gray-300 hover:text-white">Faq</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/auth/login">
            <button className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">Log in</button>
          </Link>
          <Link to="/auth/signup">
            <button className="text-white bg-orange-600 hover:bg-orange-500 px-4 py-2 rounded">Sign up</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
