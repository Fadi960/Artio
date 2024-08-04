import React from 'react';

const BlogOne = () => {
  return (
    <div className="flex xl:w-max flex-col items-start justify-between space-y-6 rounded-xl bg-gradient-to-br from-[#222839] to-[#12151E] p-4 md:flex-row md:space-y-0 md:space-x-12 sm:rounded-2xl sm:p-8 text-base text-start font-[rubik,sansserif] leading-[24px] xl:m-10 xl:h-max mx-auto xl:mx-60" >
      <div className="flex flex-col space-y-4">
        <div className="text-gray-400">By Melissa 🐱</div>
        <h2 className="text-2xl font-bold text-white">Ultimate Guide to the Best Photorealistic AI Images & Prompts</h2>
        <p className="text-gray-300">The ultimate guide to creating photorealistic images with AI art generators. Includes examples and prompts.</p>
        <button className="w-fit rounded-md bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">Read more</button>
      </div>
      <div className="flex-shrink-0">
        <img src="/src/images/mountain.png" alt="Photorealistic mountain" className="w-full h-auto rounded-lg object-cover md:w-64 md:h-64" />
      </div>
    </div>
  );
};

export default BlogOne;
