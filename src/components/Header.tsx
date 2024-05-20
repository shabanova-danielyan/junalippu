import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div>
                <h1 className="text-xl font-bold">JUNALIPU NAME AND LOGO</h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-gray-300">HOME</a></li>
                    <li><a href="#" className="hover:text-gray-300">ABOUT</a></li>
                    <li><a href="#" className="hover:text-gray-300">LOG IN</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;