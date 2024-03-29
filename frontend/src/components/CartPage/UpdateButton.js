import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, updateItem } from "../../store/cart";
import styles from "./items.module.scss";

function UpdateButton({ item }) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(item.quantity);
  const [errors, setErrors] = useState([]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (qty > 0) {
      setErrors([]);
      const data = { id: item.id, quantity: qty };
      return dispatch(updateItem(data));
    }
    return setErrors(["Quantity must be greater than 0"]);
  };

  return (
    <form className={`${styles.updateForm}`} onSubmit={handleUpdate}>
      {errors && (
        <ul className={`${errors}`}>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <label>
        {" "}
        QUANTITY:{" "}
        <input
          type="text"
          value={qty}
          size="2"
          maxLength={`1`}
          onChange={(e) => setQty(e.target.value)}
        />
      </label>
      <button className={`${styles.update}`}>Update</button>
    </form>
  );
}

export default UpdateButton;
