import React from 'react';
import FacebookIcon from '../assets/facebook.svg';
import GoogleIcon from '../assets/email.svg';
import InstagramIcon from '../assets/instagram.svg';
import TwitterIcon from '../assets/twitter.svg';
import DiscordIcon from '../assets/discord.svg';

const Footer = () => {
  return (
    <footer className="mt-10 flex w-full flex-col items-center space-y-8 justify-center bg-gradient-to-br from-[#222839] to-[#12151E] px-4 pb-8 pt-20 font-[rubik] text-gray-400 sm:mt-40 sm:space-y-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold flex items-start text-white mb-2">Subscribe to our newsletter</h2>
        <p className="mb-4">The latest news, AI models, and fun memes from the community!</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full appearance-none rounded-lg border border-medium-blue bg-[#12151e] px-4 py-3 text-base text-gray-300 placeholder-gray-500 transition-all duration-100 focus:outline-none focus:ring-2 focus:ring-orange sm:w-[320px]"
          />
          <button className="mt-0 flex w-full flex-grow flex-row items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-700 px-5 py-3 text-base font-medium text-white transition-all duration-100 active:bg-orange-600 sm:ml-4 sm:w-fit">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex space-x-6">
        {[
          { href: "#", icon: DiscordIcon, alt: "Discord" },
          { href: "#", icon: FacebookIcon, alt: "Facebook" },
          { href: "#", icon: InstagramIcon, alt: "Instagram" },
          { href: "#", icon: TwitterIcon, alt: "Twitter" },
          { href: "#", icon: GoogleIcon, alt: "Google" }
        ].map(({ href, icon, alt }) => (
          <a key={alt} href={href} className="text-gray-400 hover:text-white">
            <img src={icon} alt={alt} className="w-6 h-6" />
          </a>
        ))}
      </div>

      <button className="px-6 sm:py-2 bg-[#1e2130] text-white rounded-md hover:bg-[#2a2f45] transition duration-300">
        ❤️ Support Us
      </button>

      <div className="flex space-x-4 text-sm">
        <a href="#" className="hover:text-white">Privacy</a>
        <a href="#" className="hover:text-white">Terms</a>
      </div>

      <p className="text-sm">
        © 2024 Artio LLC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
