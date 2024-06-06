import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StepButtons from "~/components/BookingJourney/StepButtons";
import TripDetails from "~/components/BookingJourney/TripDetails";
import TripOptions from "~/components/BookingJourney/TripOptions";
import Navigation from "~/components/BookingJourney/Navigation";

const BookingJourney: React.FC = () => {
  
  return (
    <div>
      <Header />
      <div>
        {/* steps of booking journey*/}
        <section>
          <h2>Booking Journey</h2>
          <StepButtons />
        </section>

        {/* details of journey*/}
        <section>
          <TripDetails />
        </section>

        {/* list of journey options*/}
        <section>
          <TripOptions />
        </section>

        {/* navigation days */}
        <section>
          <Navigation />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default BookingJourney;
