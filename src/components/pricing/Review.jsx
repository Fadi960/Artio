import React from 'react';

const Review = () => {
  return (
    <div className="mt-24 flex w-full max-w-7xl  flex-col items-center justify-center space-y-8 text-white sm:mt-32 sm:space-y-14">
      <h2 className="text-3xl font-bold sm:ml-64 ">We love hearing from our users!</h2>
      <div className="w-full grid grid-cols-1 sm:ml-[224px] gap-8 sm:grid-cols-2 sm:gap-10">
        <ReviewCard
          rating={5}
          comment="Love the licensing structure. I use for all my YouTube videos."
          author="Lee"
          imageSrc="/src/images/fish.png"
        />
        <ReviewCard
          rating={5}
          comment="I can make pictures that you can't find anywhere else"
          author="Callum"
          imageSrc="/src/images/village.png"
        />
        <ReviewCard
          rating={5}
          comment="A very good generator of images. I've found it incredible for exploring ideas in my business"
          author="Andrew"
          imageSrc="/src/images/crash.png"
        />
        <ReviewCard
          rating={5}
          comment="It's amazing! I can't process that such great images are generated by AI"
          author="Ritwik"
          imageSrc="/src/images/field.png"
        />
      </div>
    </div>
  );
};

const ReviewCard = ({ rating, comment, author, imageSrc }) => {
  return (
    <div className="relative flex flex-col p-6 rounded-lg border border-medium-blue bg-gradient-to-br from-[#222839] to-[#12151E] overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <img src={imageSrc} alt={author} className="w-full h-full object-cover" />
      </div>
      <div className="relative flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center mb-4">
            {[...Array(rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="mb-4">{comment}</p>
        </div>
        <div className="relative flex items-center mt-auto">
          <span className="font-semibold">- {author}</span>
        </div>
      </div>
    </div>
  );
};

export default Review;