import React from 'react'

export default function ListBooking(props) {
    return (
        <>
            <div id="demo" style={{ "marginTop": "7em" }} >
                <h2 style={{textAlign: "center"}} >List of Bookings/Tracking Screen</h2>
                <div className="relative table-responsive-vertical shadow-z-1 mt-5 container">
                    <table id="table" className="table table-hover table-mc-light-blue">
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Seats Booked</th>
                                <th>Mobile Number</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.data && props.data.map((e,key) => {
                                    let arr=` `;
                                    let n=e.selectedSeats.length;
                                    e.selectedSeats.map((e,i)=>{
                                        if(n !==(i+1) )
                                            arr+=e+", ";
                                        else
                                            arr+=e;
                                    })
                                    return (
                                        <React.Fragment key={key}>
                                            <tr>
                                                <td>{e.id}</td>
                                                <td>{arr}</td>
                                                <td>{e.mobileNumber}</td>
                                                <td>{e.date}</td>
                                                <td>{"Approved"}</td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

{/* <tr>
    <td data-title="ID">1</td>
    <td data-title="Name">Material Design Color Palette</td>
    <td data-title="Link">
        <a href="https://github.com/zavoloklom/material-design-color-palette" target="_blank">GitHub</a>
    </td>
    <td data-title="Status">Completed</td>
</tr> */}