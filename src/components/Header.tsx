import React, { useState } from 'react';
import PassengerInfo from './PassengerInfo'; 

const Header: React.FC = () => {
    const [showPassengerInfo, setShowPassengerInfo] = useState(false); // condition PassengerInfo

    // handle PassengerInfo
    const handleShowPassengerInfo = () => {
        setShowPassengerInfo(true);
    };

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div>
                <h1 className="text-xl font-bold">JUNALIPU NAME AND LOGO</h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-gray-300">HOME</a></li>
                    <li><a href="#" className="hover:text-gray-300">ABOUT</a></li>
                    {/* chan LOG IN */}
                    <li><button onClick={handleShowPassengerInfo} className="hover:text-gray-300">LOG IN</button></li>
                </ul>
            </nav>
            {/*show PassengerInfo */}
            {showPassengerInfo && <PassengerInfo />}
        </header>
    );
}

export default Header;
