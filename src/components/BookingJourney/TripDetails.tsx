import React from 'react';

const TripDetails: React.FC = () => {
    return (
        <div>
            <h2>Trip Details</h2>
            <div>
                <label htmlFor="departure">Departure:</label>
                <input type="text" id="departure" />
            </div>
            <div>
                <label htmlFor="arrival">Arrival:</label>
                <input type="text" id="arrival" />
            </div>
            <div>
                <label htmlFor="departureDate">Departure Date:</label>
                <input type="text" id="departureDate" />
            </div>
            <div>
                <label htmlFor="returnDate">Return Date:</label>
                <input type="text" id="returnDate" />
            </div>
            <div>
                <label htmlFor="passengers">Passengers:</label>
                <select id="passengers">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </div>
    );
}

export default TripDetails;
