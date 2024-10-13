
// import React from 'react'

// const Hangging_btn = () =>
// {
//   return (
//     <div>
//       <button className="fixed z-90 bottom-10 right-8 bg-orange-600 w-12 h-12 rounded-full drop-shadow-lg flex justify-center 
//     items-center text-white text-xl hover:bg-blue-700 hover:drop-shadow-2xl  hover:animate-bounce duration-300" > ✨ </button>
//     </div>
//   )
// }

// export default Hangging_btn

import React, { useState, useEffect } from 'react';

const HangingBtn = () =>
{
  const [isBlue, setIsBlue] = useState(false);

  const toggleColor = () =>
  {
    setIsBlue(!isBlue);
  };

  useEffect(() =>
  {
    const handleScroll = () =>
    {
      const heroSection = document.querySelector('.hero-section'); // Assuming your hero section has this class
      if (heroSection)
      {
        const rect = heroSection.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0)
        {
          // Button is over the hero section
          setIsBlue(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <button
        className={`fixed z-90 bottom-10 right-8 w-12 h-12 rounded-full drop-shadow-lg flex justify-center 
        items-center text-white text-xl hover:drop-shadow-2xl hover:animate-bounce duration-300
        ${isBlue ? 'bg-blue-700' : 'bg-orange-600 hover:bg-blue-700'}`}
        onClick={toggleColor}
      >
        ✨
      </button>
    </div>
  );
};

export default HangingBtn;