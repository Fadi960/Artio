import React, { useState } from 'react';
import cover1 from '../../images/cover1.png';
import cover2 from '../../images/cover2.png';
import cover3 from '../../images/cover3.png';

const PricingCard = ({ title, price, features, buttonText, imagePath, isPopular }) => (
  <div className="flex group transition-all ml-[50px] mr-[50px] duration-200 relative h-full font-[rubik,sansserif] flex-col items-center justify-between rounded-lg border border-medium-blue bg-gradient-to-br from-[#222839] to-[#12151E] p-6 text-white">
    {isPopular && (
      <div className="absolute -top-3 right-4 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded">
        Most popular
      </div>
    )}
    <div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <img src={imagePath} alt={title} className="w-72 h-32 object-cover rounded-lg mb-4 hover:scale-110 " />
      <p className="text-3xl font-bold mb-4">{price}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
      {buttonText}
    </button>
  </div>
);

const Plan = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      title: "Supporter",
      price: isYearly ? "$5/mo (billed yearly)" : "$6/mo",
      features: [
        "45 seconds for 9 images",
        "Remove background in 15s",
        "Unlimited images",
        "High priority",
        "No ads",
        "No watermark",
        "Your images are private*"
      ],
      buttonText: isYearly ? "Upgrade to Supporter (Yearly)" : "Upgrade to Supporter (Monthly)",
      imagePath: cover1
    },
    {
      title: "Professional",
      price: isYearly ? "$20/mo (billed yearly)" : "$24/mo",
      features: [
        "15 seconds for 9 images",
        "Remove background in 5s",
        "Unlimited images",
        "Highest priority",
        "No ads",
        "No watermark",
        "Your images are private*",
        "Early access to new features"
      ],
      buttonText: isYearly ? "Upgrade to Professional (Yearly)" : "Upgrade to Professional (Monthly)",
      imagePath: cover2,
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        "Custom models",
        "Custom integrations",
        "Dedicated support",
        "Private servers"
      ],
      buttonText: "Contact us",
      imagePath: cover3
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center font-[rubik,sans-serif] space-y-12 bg-[#12151e] p-4">
      <h1 className="text-4xl font-bold text-center text-white">Choose your plan</h1>
      <p className="text-lg text-gray-400 text-center">
        Get the best of Artio, for personal and commercial use.
      </p>
      <div className="flex items-center space-x-4">
        <span className={`text-lg text-white ${!isYearly ? 'font-bold' : ''}`}>Monthly</span>
        <button
          className={`w-16 h-8 rounded-full p-1 ${isYearly ? 'bg-orange-500' : 'bg-gray-300'}`}
          onClick={() => setIsYearly(!isYearly)}
        >
          <div
            className={`w-6 h-6 rounded-full bg-white transform duration-300 ease-in-out ${isYearly ? 'translate-x-8' : ''}`}
          ></div>
        </button>
        <span className={`text-lg text-white ${isYearly ? 'font-bold' : ''}`}>Yearly</span>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 gap-12 lg:grid-cols-3 lg:grid-rows-1">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Plan;
