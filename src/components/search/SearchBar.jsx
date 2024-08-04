import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-10">
      <div className="text-center space-y-10">
      <h1 className="text-4xl font-bold text-white">
          <span className="text-orange-500">A</span>
          rt
          <span className="text-orange-500">i</span>
          o
        </h1>
        <p className="text-lg text-gray-400">
          Find AI generated images from the Artio database
        </p>
      </div>
      <div className="flex w-full max-w-xl">
        <input 
          type="text" 
          placeholder="Abstract painting of cats..." 
          className="w-full , cursor-text , rounded-lg , rounded-r-none , border , border-r-0 , border-gray-400 , bg-gray-800 , p-3 , text-base , text-white , placeholder-gray-400 " 
        />
        <button className="flex , w-full , min-w-max , flex-row , items-center , justify-center , space-x-2 , rounded-lg , bg-orange-500 , px-5 , py-3 , text-base , font-medium , text-white , transition-all , duration-100 , hover:bg-orange-700 , active:bg-orange-500 , sm:ml-4 , sm:w-[216px]">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
