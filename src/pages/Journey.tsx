import React from "react";
import { useRouter } from "next/router";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const Journey: React.FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push("/PaymentMethod");
  };

  return (
    <div>
      <Header />
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

      <button onClick={handleContinue}>Continue</button>
      <Footer />
    </div>
  );
};

export default Journey;
