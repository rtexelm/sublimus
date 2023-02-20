import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../store/cart";
import styles from "./items.module.scss";

function RemoveButton({ itemId }) {
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    const data = itemId;
    dispatch(deleteItem(data));
  };
  return (
    <p className={`${styles.remove}`} onClick={handleRemove}>
      Remove
    </p>
  );
}

export default RemoveButton;
