import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import styles from "./checkout.module.scss";

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  // const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `http://localhost:3000/payment`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <div className={`${styles.paymentFormContainer}`}>
      <form id={styles.paymentForm} onSubmit={handleSubmit}>
        <PaymentElement
          id={styles.paymentElement}
          options={paymentElementOptions}
        />
        <button disabled={isLoading || !stripe || !elements} id={styles.submit}>
          <span id="button-text">
            {isLoading ? (
              <div className={`${styles.spinner}`} id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {message && <div id={`${styles.paymentMessage}`}>{message}</div>}
      </form>
    </div>
  );
}

export default PaymentForm;
