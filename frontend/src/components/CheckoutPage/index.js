import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItems, getItems } from "../../store/cart";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./checkout.module.scss";
import { createPayment, getClientSecret } from "../../store/payments";
import PaymentForm from "./PaymentForm";

const STRIPE_PUBLIC = process.env.REACT_APP_STRIPE_PUBLIC;
const stripePromise = loadStripe(STRIPE_PUBLIC);

function CheckoutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createPayment());
  }, [dispatch]);

  const clientSecret = useSelector(getClientSecret);
  console.log(clientSecret);

  const appearance = {
    theme: "night",
    variables: {
      colorPrimary: "#00cc8f",
      colorBackground: "#f6f6f6",
      colorText: "#301c1c",
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className={`${styles.pageContainer}`}>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
}

export default CheckoutPage;
