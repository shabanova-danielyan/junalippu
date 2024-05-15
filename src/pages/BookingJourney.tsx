import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BookingJourney: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="p-4">
                <section>
                    <h2>Booking Journey</h2>
                    {/* Шаги бронирования */}
                    <div>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>Done</button>
                    </div>
                </section>

                <section>
                    <h2>Details of the journey</h2>
                    {/* Детали путешествия */}
                    <div>
                        <p>Lappeenranta - Tampere 1 adult Train nr: 171</p>
                        <h3>Travel class</h3>
                        <p>1 class - 36 euro</p>
                        <p>2 class - 15 euro</p>
                        <h3>Seat no:</h3>
                        <h3>Van no:</h3>
                        <h3>Total price: Euro</h3>
                    </div>
                </section>

                <section>
                    <h2>Available journeys</h2>
                    {/* Список вариантов поездок */}
                    <div>
                        <p>17 06 May 2024</p>
                        <p>06 May</p>
                        <p>x1</p>
                        <p>5:31-8:53 - 3h 22 min - 2 changes - 35 euro</p>
                        <p>6:31-9:53 - 3h 22 min - 2 changes - 35 euro</p>
                        <p>7:25-10:53 - 3h 22 min - 2 changes - 35 euro</p>
                        <p>8:31-12:53 - 3h 22 min - 2 changes - 35 euro</p>
                        <p>11:31 14:58 - 3h 22 min - 2 changes - 35 euro</p>
                        <p>14:36-17:53 - 3h 22 min - 2 changes - 35 euro</p>
                        <p>17:43 20:53 - 3h 22 min - 2 changes - 35 euro</p>
                        <p>20:43 23:53 - 3h 22 min - 2 changes - 35 euro</p>
                    </div>
                </section>
            </main>
                      {/* Навигация */}
                      <section>
                <button>Previous day</button>
                <button>Next Day</button>
            </section>
            <Footer />
        </div>
    );
}

export default BookingJourney;