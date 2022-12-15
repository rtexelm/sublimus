import React from "react";
import { useHistory } from "react-router-dom";
import RemoveButton from "./RemoveButton";

function CartItem({ item }) {
  const { id, quantity, title, price } = item;
  // const history = useHistory();

  return (
    <ul>
      <li>{title}</li>
      <li>{price}</li>
      <li>{quantity}</li>
      <li>
        <RemoveButton itemId={id} />
      </li>
    </ul>
  );
}

export default CartItem;
