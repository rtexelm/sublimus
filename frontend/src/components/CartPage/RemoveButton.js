import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../store/cart";
import styles from "./items.module.scss";

function RemoveButton({ itemId }) {
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    const data = itemId;
    console.log(data);
    dispatch(deleteItem(data));
  };
  return (
    <h1 className={`${styles.remove}`} onClick={handleRemove}>
      Remove
    </h1>
  );
}

export default RemoveButton;
