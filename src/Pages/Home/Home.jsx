import React from 'react';
import Banner from '../Banner/Banner';
import WorkBox from '../WoksBoxs/WorkBox';
import ServicesSection from '../ServicesSection/ServicesSection';
import Brands from '../Brands/Brands';
import OurService from '../OurService/OurService';
import Reviews from '../Reviews/Reviews';
import FAQ from '../FAQ/Faq';


const reviewPromise = fetch('/public/reviews.json').then(res => res.json());

const Home = () => {


    return (
        <div >
            
           <div className='py-4'>
              <Banner></Banner>
           </div>
            <WorkBox></WorkBox>
            <ServicesSection></ServicesSection>
            <div className='py-10'>
                <Brands></Brands>
            </div>
            <OurService></OurService>
            <Reviews reviewPromise={reviewPromise}></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;