import React, { useState } from 'react';
import CloseIcon from '../../assets/close.svg';
import DropdownIcon from '../../assets/dropdown.svg';

const Search = () => {
  const [style, setStyle] = useState('Art');
  const [expertModeOpen, setExpertModeOpen] = useState(true);
  const [searchText, setSearchText] = useState('');

  return (
    <div className="w-full max-w-2xl sm:mx-auto space-y-4">
      <div className="flex items-center bg-[#1e2130] rounded-lg mx-auto relative">
        <input
          type="text"
          placeholder="What do you want to generate?"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-grow px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
        {searchText && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <img
              src={CloseIcon}
              alt="Clear"
              onClick={() => setSearchText('')}
              className="cursor-pointer w-6 h-6"
            />
          </div>
        )}
        <button className="bg-[#e86c1a] text-white px-6 py-3 rounded-r-lg hover:bg-[#f17c2a] transition duration-300">
          <span className="mr-2">✏️ Draw</span>
        </button>
      </div>

      <div className="flex flex-row flex-wrap gap-x-3 space-y-2 pl-2 sm:space-x-2 items-center">
        <span className="text-gray-400">Style</span>
        {['Art', 'Photo', 'Drawing', 'None'].map((item) => (
          <button
            key={item}
            className={`px-4 py-2 sm:rounded-full ${
              style === item ? 'bg-[#3a3f50] text-white ' : 'bg-[#1e2130] text-gray-400'
            }`}
            onClick={() => setStyle(item)}
          >
            {item === 'Art' && '🎨 '}
            {item === 'Photo' && '📷 '}
            {item === 'Drawing' && '✏️ '}
            {item}
          </button>
        ))}
      </div>

      <div className="bg-[#1e2130] rounded-lg p-4 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-white font-semibold">Expert Mode</span>
          <img
            src={DropdownIcon}
            alt="Toggle"
            onClick={() => setExpertModeOpen(!expertModeOpen)}
            className={`w-6 h-6 cursor-pointer transition-transform duration-300 ${expertModeOpen ? 'rotate-180' : ''}`}
          />
        </div>

        {expertModeOpen && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-white">Negative Words</span>
            </div>
            <div className="bg-[#282c3e] rounded-lg p-3 flex justify-between items-center">
              <span className="text-gray-400">Use negative words like "blue" to get less blue color</span>
              <img
                src={CloseIcon}
                alt="Close"
                className="w-6 h-6 cursor-pointer"
                onClick={() => setExpertModeOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
