import React from 'react';

const PaymentMethod: React.FC = () => {
    return (
        <div>
            {/* Способы оплаты */}
            <section>
                <h2>Payment method</h2>
                <ul>
                    <li>Payment Card</li>
                    <li>Invoice</li>
                </ul>
                <button>Complete purchase</button>
            </section>
        </div>
    );
}

export default PaymentMethod;
