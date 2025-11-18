import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewPromise }) => {
    const reviews = use(reviewPromise);
    console.log(reviews)
        
    
    return (
        <div>
             <>
      <Swiper
        loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
                    // 0px (Mobile): Show 1 slide
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // 768px and up (Desktop/Tablet): Show 3 slides
                    768: { 
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
       {
        reviews.map(review =>  <SwiperSlide key={reviews.id}>
         <ReviewCard review={review}></ReviewCard>
        </SwiperSlide>)
       }
      </Swiper>
    </>
        </div>
    );
};

export default Reviews;