import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
}

export default PaymentForm;
