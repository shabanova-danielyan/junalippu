// components/TripDetails.tsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const TripDetails: React.FC = () => {
  const router = useRouter();
  const [departure, setDeparture] = useState<string>('');
  const [arrival, setArrival] = useState<string>('');
  const [departureDate, setDepartureDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string | null>(null); // Allow null for hiding
  const [passengers, setPassengers] = useState<number>(1); // Default value 1

  useEffect(() => {
    const { from, to, startDate, returnDate, passengers } = router.query;

    if (typeof from === 'string') setDeparture(from);
    if (typeof to === 'string') setArrival(to);
    if (typeof startDate === 'string') {
      const date = new Date(startDate);
      setDepartureDate(date.toLocaleDateString());
    }
    if (typeof returnDate === 'string' && returnDate) {
      const date = new Date(returnDate);
      setReturnDate(date.toLocaleDateString());
    }
    if (typeof passengers === 'string') {
      const parsedPassengers = parseInt(passengers, 10);
      setPassengers(parsedPassengers);
    }
  }, [router.query]);

  return (
    <div>
      <h2>Trip Details</h2>
      <div>
        <label htmlFor="departure">Departure:</label>
        <input type="text" id="departure" value={departure} readOnly />
      </div>
      <div>
        <label htmlFor="arrival">Arrival:</label>
        <input type="text" id="arrival" value={arrival} readOnly />
      </div>
      <div>
        <label htmlFor="departureDate">Departure Date:</label>
        <input type="text" id="departureDate" value={departureDate} readOnly />
      </div>
      {returnDate && (
        <div>
          <label htmlFor="returnDate">Return Date:</label>
          <input type="text" id="returnDate" value={returnDate} readOnly />
        </div>
      )}
      <div>
        <label htmlFor="passengers">Passengers:</label>
        <input type="text" id="passengers" value={passengers} readOnly />
      </div>
    </div>
  );
};

export default TripDetails;
