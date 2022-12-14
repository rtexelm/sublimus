import React from "react";
import { useHistory } from "react-router-dom";

function CartItem({ item }) {
  const { quantity, title, price } = item;
  const history = useHistory();

  return (
    <ul>
      <li>{title}</li>
      <li>{price}</li>
      <li>{quantity}</li>
    </ul>
  );
}

export default CartItem;
