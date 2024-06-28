import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="mt-8">
            <nav className="flex justify-center space-x-20">
                <a href="#" className="font-inter italic font-normal text-[32px] leading-[39px] text-black">Data protection</a>
                <a href="#" className="font-inter italic font-normal text-[32px] leading-[39px] text-black">Terms and Condition</a>
                <a href="#" className="font-inter italic font-normal text-[32px] leading-[39px] text-black">Customer service</a>
                <a href="#" className="font-inter italic font-normal text-[32px] leading-[39px] text-black">FAQ</a>
            </nav>
        </footer>
    );
};

export default Footer;
