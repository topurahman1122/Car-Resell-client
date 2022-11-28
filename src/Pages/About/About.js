import React from 'react';
import byk from './7Dzsdt.webp';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={byk} alt=""
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Best Car Resell</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default About;