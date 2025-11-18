import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  const [active, setActive] = useState("track");

  return (
    <div className="w-full max-w-full overflow-hidden"> {/* FIX */}

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="w-full max-w-full"   /* FIX */
      >

        {/* SLIDE - 1 */}
        <div className='relative w-full max-w-full overflow-hidden'> {/* FIX */}
          <img 
            src="https://i.ibb.co/S4nJQnXT/banner1.png" 
            className="w-full max-w-full object-cover"  /* FIX */
          />

          {/* Buttons */}
          <div className="absolute bottom-3 lg:bottom-6 left-3 lg:left-6 flex gap-2 lg:gap-3">

            <button
              onClick={() => setActive("track")}
              className={`px-3 lg:px-4 py-2 font-bold rounded-full border text-black
                ${active === "track" ? "bg-[#CAEB66]" : "bg-white"}
              `}
            >
              Track Your Parcel
            </button>

            <button
              onClick={() => setActive("rider")}
              className={`px-3 lg:px-4 py-2 font-bold rounded-full border text-black
                ${active === "rider" ? "bg-[#CAEB66]" : "bg-white"}
              `}
            >
              Be A Rider
            </button>

          </div>
        </div>

        {/* SLIDE - 2 */}
        <div className="w-full max-w-full overflow-hidden"> {/* FIX */}
          <img 
            src="https://i.ibb.co/gL8fq9mG/banner2.png" 
            className="w-full max-w-full object-cover" /* FIX */
          />
        </div>

        {/* SLIDE - 3 */}
        <div className="w-full max-w-full overflow-hidden"> {/* FIX */}
          <img 
            src="https://i.ibb.co/PzmBc9hk/banner3.png" 
            className="w-full max-w-full object-cover" /* FIX */
          />
        </div>

      </Carousel>

    </div>
  );
};

export default Banner;
