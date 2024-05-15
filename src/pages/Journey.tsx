import React from 'react';

const Journey: React.FC = () => {
    return (
        <div>
            <h2>Costumized departure itinerary, seat and class</h2>
            <p>Monday 6.5.2024</p>
            <p>Lappeenranta - Tampere 1 adult Train nr: 171</p>
            
            <h3>Travel class</h3>
            <div>
                <button>1 class</button>
                <span>36 euro</span>
            </div>
            <div>
                <button>2 class</button>
                <span>15 euro</span>
            </div>
            
            <h3>Seat no:</h3>
            <input type="text" placeholder="Enter seat number" />
            <h3>Van no:</h3>
            <input type="text" placeholder="Enter van number" />

            <h3>Total price: Euro</h3>
            <p>---</p>

            <button>Continue</button>
        </div>
    );
}

export default Journey;