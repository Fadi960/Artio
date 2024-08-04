import React, { useState } from 'react';
import abstract from '../../images/abstract.png';
import bear from '../../images/bear.png';
import field from '../../images/field.png';
import fish from '../../images/fish.png';
import mountain from '../../images/mountain.png';
import wooden from '../../images/wooden.png';
import crash from '../../images/crash.png';
import creature from '../../images/creature.png';
import glasses from '../../images/glasses.png';
import ostrich from '../../images/ostrich.png';
import panda from '../../images/panda.png';
import snow from '../../images/snow.png';
import spaceship from '../../images/spaceship.png';
import terminator from '../../images/terminator.png';
import unicorn from '../../images/unicorn.png';
import village from '../../images/village.png';
import waiter from '../../images/waiter.png';
import witch from '../../images/witch.png';

const InspirationImage = ({ src, alt }) => (
  <div className="relative group">
    <img src={src} alt={alt} className="w-full h-full object-cover rounded-lg" />
    <div className="absolute bottom-2 right-2 bg-orange-500 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    </div>
  </div>
);

const Inspiration = () => {
  const allImages = [
    { src: abstract, alt: 'abstract' },
    { src: bear, alt: 'bear' },
    { src: field, alt: 'field' },
    { src: fish, alt: 'fish' },
    { src: mountain, alt: 'mountain' },
    { src: wooden, alt: 'wooden' },
    { src: crash, alt: 'crash' },
    { src: creature, alt: 'creature' },
    { src: glasses, alt: 'glasses' },
    { src: ostrich, alt: 'ostrich' },
    { src: panda, alt: 'panda' },
    { src: snow, alt: 'snow' },
    { src: spaceship, alt: 'spaceship' },
    { src: terminator, alt: 'terminator' },
    { src: unicorn, alt: 'unicorn' },
    { src: village, alt: 'village' },
    { src: waiter, alt: 'waiter' },
    { src: witch, alt: 'witch' },
  ];

  const inspirationImages = allImages.slice(0, 9);
  const recentImages = allImages.slice(9, 18);

  const [images, setImages] = useState(inspirationImages);
  const [activeButton, setActiveButton] = useState('inspiration'); 

  return (
    <div className="mt-16 px-4 md:px-8 flex w-full max-w-8xl flex-col items-center justify-center">
      <div className="w-full">
        <div className="flex justify-center gap-4 items-center mb-4">
          <button 
            className={`text-gray-400 text-2xl hover:text-white ${activeButton === 'inspiration' ? 'text-white' : ''}`} 
            onClick={() => {
              setImages(inspirationImages);
              setActiveButton('inspiration');
            }}
          >
            Inspirations
          </button>
          <button 
            className={`text-gray-400 text-2xl hover:text-white ${activeButton === 'recent' ? 'text-white' : ''}`} 
            onClick={() => {
              setImages(recentImages);
              setActiveButton('recent');
            }}
          >
            Recents
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <InspirationImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
