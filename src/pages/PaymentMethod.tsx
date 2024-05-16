import React from "react";
import { useRouter } from "next/router";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

const PaymentMethod: React.FC = () => {
  const router = useRouter();

  const handleCompletePurchase = () => {
    //purchase completed
    alert("Purchase completed!");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <Header />
      <h2>Payment Method</h2>
      <div>
        <h3>Payment method</h3>
        <ul>
          <li>Payment Card</li>
          <li>Invoice</li>
        </ul>
      </div>
      <button onClick={handleCompletePurchase}>Complete purchase</button>
      <button onClick={handleBack}>Back</button>
      <Footer />
    </div>
  );
};

export default PaymentMethod;
