import React, {useState} from 'react';

export default function BookTicket(props
    // {date, id, setId, setDate, mobileNumber, setMobileNumber, selectedSeats, setSelectedSeats}
    ) {
    const [date, setDate] = useState('');
    const [id, setId] = useState([]);
    const [mobileNumber, setMobileNumber] = useState('');
    const [selectedSeats, setSelectedSeats] = useState([]);
    
    const handleSeatSelect = (seat) => {
        if (selectedSeats.length >= 6) {
            alert('Maximum number of seats reached for this date');
            return;
        }
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const bookingId = Math.floor(Math.random() * 1000000);
        props.setData([
            ...props.data,
            {
                date: date,
                id: props.data.length+1,
                mobileNumber: mobileNumber,
                selectedSeats: selectedSeats
            }
        ])
        alert(`Booking ID: ${bookingId}\nDate: ${date}\nMobile Number: ${mobileNumber}\nSelected Seats: ${selectedSeats.join(', ')}`);
    };

    return (
        <form onSubmit={handleSubmit} className="book-ticket-form" style={{"marginTop": "6em"}}>
            <h2 >Book Ticket</h2>
            <div className="form-group" >
                <label htmlFor="date-input">Date:</label>
                <input type="date" id="date-input" value={date} onChange={(event) => setDate(event.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="mobile-input">Mobile Number:</label>
                <input type="tel" id="mobile-input" value={mobileNumber} onChange={(event) => setMobileNumber(event.target.value)} required />
            </div>
            <div className="form-group">
                <label>Seat Selection:</label>
                <div className="seat-selection">
                    {[...Array(20)].map((_, index) => {
                        const seat = `A${index + 1}`;
                        const isAvailable = selectedSeats.length < 6 && !selectedSeats.includes(seat);
                        const isSelected = selectedSeats.includes(seat);
                        const className = `seat ${isAvailable ? 'available' : 'unavailable'} ${isSelected ? 'selected' : ''}`;
                        return (
                            <div key={seat} className={className} onClick={() => handleSeatSelect(seat)}>
                                {seat}
                            </div>
                        );
                    })}
                </div>
            </div>
            <button type="submit">Book Ticket</button>
        </form>
    )
}


