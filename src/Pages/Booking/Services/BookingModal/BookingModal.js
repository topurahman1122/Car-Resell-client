import React from 'react';

const BookingModal = (buy) => {

    const { title, price } = buy;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="booking-modal">Toyota</h3>
                    <p className="py-4">$ 75000</p>
                    <form className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" placeholder="Type here" className="input w-full " />
                        <input type="text" placeholder="Type here" className="input w-full " />
                        <input type="text" placeholder="Type here" className="input w-full " />
                        <input type="text" placeholder="Type here" className="input w-full " />
                        <br />
                        <input className='btn btn-accent w-full max-w-xm' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;