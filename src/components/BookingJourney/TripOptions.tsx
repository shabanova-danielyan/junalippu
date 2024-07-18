import React from 'react';
import Link from 'next/link';

const TripOptions: React.FC = () => {
    const trips = [
        { id: 1, time: '5:31 - 8:53', duration: '3h 22 min', price: '35 euro', date: '06 May 2024' },
        { id: 2, time: '6:31 - 9:53', duration: '3h 22 min', price: '35 euro', date: '06 May 2024' },
        { id: 3, time: '7:25 - 10:53', duration: '3h 28 min', price: '35 euro', date: '06 May 2024' },
        { id: 4, time: '8:31 - 11:53', duration: '3h 22 min', price: '35 euro', date: '06 May 2024' },
        { id: 5, time: '9:31 - 12:53', duration: '3h 22 min', price: '35 euro', date: '06 May 2024' },
        { id: 6, time: '10:31 - 13:53', duration: '3h 22 min', price: '35 euro', date: '06 May 2024' },
        { id: 7, time: '11:31 - 14:53', duration: '3h 22 min', price: '35 euro', date: '06 May 2024' },
        { id: 8, time: '12:31 - 15:53', duration: '3h 22 min', price: '35 euro', date: '06 May 2024' },
        { id: 9, time: '13:31 - 16:53', duration: '3h 22 min', price: '35 euro', date: '06 May 2024' },
        { id: 10, time: '14:31 - 17:53', duration: '3h 22 min', price: '35 euro', date: '06 May 2024' },
    ];

    return (
        <div>
            <div className="trip-options">
                {trips.map(trip => (
                    <div key={trip.id} className="trip-option-row">
                        <p>
                            <Link href={`/Journey?time=${trip.time}&duration=${trip.duration}&price=${trip.price}&date=${trip.date}`}>
                                {trip.time}
                            </Link>
                        </p>
                        <p>{trip.duration}</p>
                        <p>{trip.price}</p>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .trip-options {
                    display: flex;
                    flex-direction: column;
                }
                .trip-option-row {
                    display: flex;
                    justify-content: space-between;
                    margin: 8px 0;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                .trip-option-row p {
                    flex: 1;
                    text-align: center;
                    margin: 0;
                }
                .trip-option-row p:first-child {
                    text-align: left;
                }
                .trip-option-row p:last-child {
                    text-align: right;
                }
            `}</style>
        </div>
    );
}

export default TripOptions;
