import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import styles from "./checkout.module.scss";

function PaymentForm({ items }) {
  const stripe = useStripe();
  const elements = useElements();

  const totalItems = () => {
    let total = 0;
    for (const i of items) {
      total += i.quantity;
    }
    return total;
  };
  const subTotal = () => {
    let total = 0;
    for (const i of items) {
      total += i.quantity * i.price;
    }
    return total.toFixed(2);
  };

  // const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(
    "Please use card number 4242 4242 4242 4242"
  );
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
        return_url: `https://sublimus.onrender.com/payment`,
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
    <>
      <h1 className={styles.title}>Checkout</h1>
      <div className={`${styles.paymentFormContainer}`}>
        <form id={styles.paymentForm} onSubmit={handleSubmit}>
          <PaymentElement
            id={styles.paymentElement}
            options={paymentElementOptions}
          />
          <button
            disabled={isLoading || !stripe || !elements}
            id={styles.submit}
          >
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
        <section className={styles.chargeDetails}>
          <p className={styles.help}>
            <h3 className={styles.helpTitle}>NEED HELP?</h3>
            Enter <b>card number</b>:{" "}
            <pre>
              <code id={styles.cardNumber}>4242 4242 4242 4242</code>
            </pre>
            Enter any future <b>expiry</b>
            <br />
            Enter arbitrary <b>CVC</b> and <b>ZIP</b>
          </p>
          <dl className={`${styles.cartTotals}`}>
            <dt>Total Items</dt>
            <dd>{totalItems()}</dd>
          </dl>
          <dl className={`${styles.cartTotals} ${styles.esTotal}`}>
            <dt>Total Charge</dt>
            <dd>${subTotal()}</dd>
          </dl>
        </section>
      </div>
    </>
  );
}

export default PaymentForm;
