import React from 'react';


const ServiceCard = ({ service, setBuy }) => {

    const { img, price, title } = service;
    return (
        <div className="card mt-10 card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-green-600'>${price}</p>
                <div className="card-actions justify-end">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                        onClick={() => setBuy(service)}
                    >Buy This</label>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;