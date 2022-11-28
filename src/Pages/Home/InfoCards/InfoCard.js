import React from 'react';

const InfoCard = ({ card }) => {

    const { name, description, icon, bgclass } = card;
    return (
        <div className={`card card-side bg-base-100 shadow-xl ${bgclass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;