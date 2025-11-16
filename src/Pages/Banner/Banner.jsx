import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
      const [active, setActive] = useState("track");
    return (
        <div>
             <Carousel
              
              autoPlay={true}
              infiniteLoop={true}
               >
                <div className='relative'>
                    <img src="https://i.ibb.co/S4nJQnXT/banner1.png" />

                     <div className="absolute bottom-3 lg:bottom-6 left-6 flex gap-3">
                    <button
                        onClick={() => setActive("track")}
                        className={`px-4 py-2 font-bold rounded-full border
                            ${active === "track" ? "bg-[#CAEB66] text-black  " : "bg-white text-black "}
                        `}
                        >
                        Track Your Parcel
                    </button>
                    <button
                        onClick={() => setActive("rider")}
                        className={`px-4 py-2 font-bold rounded-full border
                            ${active === "rider" ? "bg-[#CAEB66] text-black" : "bg-white text-black "}
                        `}
                        >
                        Be A Rider
                    </button>
      </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/gL8fq9mG/banner2.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/PzmBc9hk/banner3.png" />
                </div>
            </Carousel>


         
        </div>
    );
};

export default Banner;