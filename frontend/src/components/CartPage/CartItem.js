import React from "react";
import { useHistory } from "react-router-dom";
import RemoveButton from "./RemoveButton";
import UpdateButton from "./UpdateButton";

function CartItem({ item }) {
  const { id, quantity, title, price } = item;
  // const history = useHistory();

  return (
    <ul>
      <li>{title}</li>
      <li>{price}</li>
      <li>{quantity}</li>
      <li>
        <UpdateButton item={item} />
      </li>
      <li>
        <RemoveButton itemId={id} />
      </li>
    </ul>
  );
}

export default CartItem;
