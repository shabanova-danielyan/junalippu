import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const router = useRouter();
    const [showDescription, setShowDescription] = useState(false);

    const handleShowPassengerInfo = () => {
        router.push('/PassengerInfoPage');
    };

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    const navigateToMainPage = () => {
        router.push('/MainPage'); // Replace '/MainPage' with your actual main page route
    };

    return (
        <header className="h-24 text-white p-4 flex justify-between items-center relative">
            <div className="absolute left-0 top-0 h-full flex items-center" style={{ marginLeft: '50px' }}>
                {/* logo */}
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="h-full rounded-full"
                    style={{
                        width: '199px',
                        borderRadius: '60px',
                    }}
                />
            </div>
            <nav className="ml-auto" style={{ paddingRight: '236px' }}>
                <ul className="flex space-x-4">
                    <li>
                        <button onClick={navigateToMainPage} className="text-black font-bold py-2 px-4 hover:text-gray-300"
                                style={{ fontFamily: 'Inter', fontWeight: 700, fontStyle: 'italic', fontSize: '24px', lineHeight: '29.05px' }}>
                            HOME
                        </button>
                    </li>
                    <li>
                        <button onClick={toggleDescription} className="text-black font-bold py-2 px-4 hover:text-gray-300"
                                style={{ fontFamily: 'Inter', fontWeight: 700, fontStyle: 'italic', fontSize: '24px', lineHeight: '29.05px' }}>
                            ABOUT
                        </button>
                    </li>
                    <li>
                        <button onClick={handleShowPassengerInfo} className="text-black font-bold py-2 px-4 hover:text-gray-300"
                                style={{ fontFamily: 'Inter', fontWeight: 700, fontStyle: 'italic', fontSize: '24px', lineHeight: '29.05px' }}>
                            LOG IN
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Conditional rendering of description */}
            {showDescription && (
                <div className="absolute bg-white rounded-lg shadow-md p-4 top-20 right-0 z-10">
                    <h3 className="text-black text-xl font-bold mb-2">About Us</h3>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero at nunc vulputate, vitae congue urna dictum.
                    </p>
                </div>
            )}
        </header>
    );
}

export default Header;
