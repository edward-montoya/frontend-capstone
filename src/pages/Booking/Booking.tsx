import { createPortal } from 'react-dom';
import './Booking.scss';
import BookingForm from './BookingForm/BookingForm';
import { useState } from 'react';
import BookingConfirmation from './BookingConfirmation/BookingConfirmation';


const Booking = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <section className='booking'>
                <div className='booking__content'>
                    <h1 className='booking__title'>Reservation</h1>
                    <BookingForm confirmation={() => setVisible(true)} />
                </div>
            </section>
            { createPortal(
                <BookingConfirmation visible={visible} setVisible={setVisible} />
                , document.body) }
        </>
    )
}

export default Booking;