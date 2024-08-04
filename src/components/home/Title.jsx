import React from 'react';

const Title = () => {
  return (
    <div className="sm:mt-[97px] flex sm:w-[768px] h-[147px] sm:mx-auto flex-col items-center justify-center space-y-2 bg-[#12151e] font-['Rubik',sans-serif] text-base leading-6 text-left">
      <div className="flex items-center">
        <h1 className="text-4xl font-bold text-white">
          <span className="text-orange-500">A</span>
          rt
          <span className="text-orange-500">i</span>
          o
        </h1>
        <span className="mt-1 ml-2 rounded-lg bg-orange-500 px-2 py-1 text-sm font-normal text-white">v3</span>
      </div>
      <p className="text-gray-400">Create AI Art with our free AI image generator.</p>
    </div>
  );
};

export default Title;
