import React from 'react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Brands = () => {
  const logos = [
    "https://i.ibb.co/sdBXtyM8/amazon.png",
    "https://i.ibb.co/LdT5jPkJ/amazon-vector.png",
    "https://i.ibb.co/4wy8TD3S/casio.png",
    "https://i.ibb.co/8Lt4VJp4/moonstar.png",
    "https://i.ibb.co/0RbF0505/randstad.png",
    "https://i.ibb.co/Mk6Gjb1S/star.png",
    "https://i.ibb.co/spmxqQrz/start-people.png",
  ];

 
  const slides = [...logos, ...logos];

  return (
    <>
      <h1 className='text-3xl font-bold text-center mb-10'>
        We've helped thousands of sales teams
      </h1>

      <Swiper
        loop={true}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}

        // responsive breakpoints
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} className="w-32 mx-auto opacity-80 hover:opacity-100 transition" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Brands;
