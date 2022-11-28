import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal/BookingModal';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    const [buy, setBuy] = useState(null);



    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold mt-10 text-green-600">Resell</p>
                <h2 className="text-5xl font-bold">Our Resell Price</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                        setBuy={setBuy}
                    ></ServiceCard>)
                }
            </div>
            {
                buy &&
                <BookingModal
                    buy={buy}
                ></BookingModal>}
        </div>
    );
};

export default Services;