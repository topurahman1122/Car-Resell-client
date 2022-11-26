import React from 'react';

const Banner = () => {
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://img.freepik.com/premium-psd/car-rental-sale-horizontal-banner-facebook-cover-advertising-template_177160-634.jpg?w=2000" className="max-w-lg rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Find your next car with us</h1>
                    <p className="py-6">Leading online automotive marketplace in Bangladesh</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;