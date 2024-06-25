import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface City {
  id: number;
  name: string;
}

const SearchJourney: React.FC = () => {
  const router = useRouter();
  const [cities, setCities] = useState<City[]>([]);
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch('/api/cities');
      const data = await response.json();
      setCities(data);
    };

    fetchCities();
  }, []);

  const handleSearchJourney = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push("/BookingJourney");
  };

  return (
    <section>
      <h2>Where do you want to go</h2>
      <form>
        <div className="mb-2 flex space-x-4">
          <div>
            <label htmlFor="from">From:</label>
            <select id="from" value={from} onChange={(e) => setFrom(e.target.value)}>
              <option value="" disabled>Select city</option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>{city.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="to">To:</label>
            <select id="to" value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="" disabled>Select city</option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>{city.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-2 flex space-x-4">
          <div>
            <label htmlFor="date">Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select start date"
            />
          </div>
          <div>
            <label htmlFor="return">Return Date:</label>
            <DatePicker
              selected={returnDate}
              onChange={(date: Date | null) => setReturnDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select return date"
            />
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
        <button
          type="button"
          onClick={handleSearchJourney}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Search journey
        </button>
      </form>
    </section>
  );
};

export default SearchJourney;
