import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import Acception from "./Acception";

const STRIPE_PUBLIC = process.env.REACT_APP_STRIPE_PUBLIC;
const stripePromise = loadStripe(STRIPE_PUBLIC);

const PaymentStatus = () => {
  return (
    <Elements stripe={stripePromise}>
      <Acception />
    </Elements>
  );
};

export default PaymentStatus;
