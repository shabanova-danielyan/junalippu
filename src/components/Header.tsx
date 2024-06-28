import React from 'react';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const router = useRouter();

    const handleShowPassengerInfo = () => {
        router.push('/PassengerInfoPage');
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
                        <button className="text-black font-bold py-2 px-4 hover:text-gray-300"
                                style={{ fontFamily: 'Inter', fontWeight: 700, fontStyle: 'italic', fontSize: '24px', lineHeight: '29.05px' }}>
                            HOME
                        </button>
                    </li>
                    <li>
                        <button className="text-black font-bold py-2 px-4 hover:text-gray-300"
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
        </header>
    );
}

export default Header;
