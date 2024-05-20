import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const MainPage: React.FC = () => {
  const router = useRouter();

  const handleSearchJourney = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push("/BookingJourney");
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        {/* search journey*/}
        <section>
          <h2>Where do you want to go</h2>
          <form>
            <div className="mb-2 flex space-x-4">
              <div>
                <label htmlFor="from">From:</label>
                <input type="text" id="from" />
              </div>
              <div>
                <label htmlFor="to">To:</label>
                <input type="text" id="to" />
              </div>
            </div>
            <div className="mb-2 flex space-x-4">
              <div>
                <label htmlFor="date">Date:</label>
                <input type="text" id="date" />
              </div>
              <div>
                <label htmlFor="return">Return Date:</label>
                <input type="text" id="return" />
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

        {/* Book your summer travels!" */}
        <section className="mb-4">
          <h2>Book your summer travels!</h2>
          <p>Tickets are now available for summer 2024.</p>
        </section>

        {/* Popular routes */}
        <section className="mb-4">
          <h2>Popular routes</h2>
          <p>Experience FINLAND by train</p>
          <ul>
            <li>Helsinki - Tampere</li>
            <li>Helsinki - Oulu</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
