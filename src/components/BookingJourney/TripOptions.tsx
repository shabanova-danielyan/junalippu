import React from 'react';
import Link from 'next/link';

const TripOptions: React.FC = () => {
    return (
        <div>
            <h2>Trip Options</h2>
            <div>
                <p>06 May 2024</p>
                <p>06 May</p>
                <p>x1</p>
                <span className="trip-options">
                    <p>
                        <Link href="/Journey">5:31-8:53 - 3h 22 min - 2 changes - 35 euro</Link>
                    </p>
                    <p>
                        <Link href="/Journey">6:31-9:53 - 3h 22 min - 2 changes - 35 euro</Link>
                    </p>
                    <p>
                        <Link href="/Journey">7:25-10:53 - 3h 22 min - 2 changes - 35 euro</Link>
                    </p>
                    {/* other journeys*/}
                </span>
            </div>
        </div>
    );
}

export default TripOptions;