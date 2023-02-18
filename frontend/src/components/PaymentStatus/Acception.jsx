import React, { useState, useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import styles from "./status.module.scss";
import { Link } from "react-router-dom";

const Acception = () => {
  const stripe = useStripe();
  const [message, setMessage] = useState(null);
  const [tryAgain, setTryAgain] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    // Retrieve the PaymentIntent
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Success! Payment received.");
          break;

        case "processing":
          setMessage(
            "Payment processing. We'll update you when payment is received."
          );
          break;

        case "requires_payment_method":
          // Redirect user back to payment page to attempt collecting
          // payment again
          setMessage("Payment failed. Please try another payment method.");
          setTryAgain(true);
          break;

        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  return (
    <div className={`${styles.fullPage}`}>
      <div className={`${styles.statusBox}`}>
        <p className={`${styles.statusMessage}`}>{message}</p>
        {tryAgain && (
          <Link className={`${styles.checkout}`} to={`checkout`}>
            Return to checkout
          </Link>
        )}
      </div>
      <Link className={`${styles.return}`} to={`films`}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default Acception;
