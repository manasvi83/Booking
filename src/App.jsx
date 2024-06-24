import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookTicket from './components/BookTicket';
import ListBooking from './components/ListBooking';

const BookTicketScreen = () => {
    const [data, setData] = useState([]);
    return (
        <>
            <Router> 
                <Navbar/>
                <Routes classname='main'>
                    <Route path="/" element={<BookTicket data={data} setData={setData} />} />   
                    <Route path="/bookings" element={<ListBooking data={data} />} />   
                </Routes>
            </Router>
            {/* <BookTicket date={date} id={id} setId={setId} setDate={setDate} mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/> */}
            {/* <ListBooking date={date} id={id} setId={setId} setDate={setDate} mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} /> */}
        </>
    );
};

export default BookTicketScreen;