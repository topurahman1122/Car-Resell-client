import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeCar from '../MakeCar/MakeCar';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <MakeCar></MakeCar>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;