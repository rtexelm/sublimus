import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItems, getItems } from "../../store/cart";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./checkout.module.scss";
import { createPayment, getClientSecret } from "../../store/payments";
import PaymentForm from "./PaymentForm";
import Acception from "./Acception";

const STRIPE_PUBLIC = process.env.REACT_APP_STRIPE_PUBLIC;
const stripePromise = loadStripe(STRIPE_PUBLIC);

function CheckoutPage() {
  const dispatch = useDispatch();
  // const [clientSecret, setClientSecret] = useState("");
  // const items = useSelector(getItems);

  useEffect(() => {
    dispatch(createPayment());
  }, [dispatch]);

  const clientSecret = useSelector(getClientSecret);
  console.log(clientSecret);

  const appearance = {
    theme: "night",
  };

  const options = {
    clientSecret,
    appearance,
  };

  // const options = { clientSecret: clientSecret, appearance: appearance };
  // console.log(clientSecret);

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm />
        </Elements>
      )}
    </>
  );
}

export default CheckoutPage;
