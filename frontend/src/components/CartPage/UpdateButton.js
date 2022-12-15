import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, updateItem } from "../../store/cart";
import styles from "./items.module.scss";

function UpdateButton({ item }) {
  // const {id, quantity} = item
  const dispatch = useDispatch();
  const [qty, setQty] = useState(item.quantity);
  const [errors, setErrors] = useState([]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (qty > 0) {
      setErrors([]);
      const data = { id: item.id, quantity: qty };
      console.log(data);
      return dispatch(updateItem(data));
    }
    return setErrors(["Quantity must be greater than 0"]);
  };

  return (
    <form onSubmit={handleUpdate}>
      <fieldset>
        <ul className={`${errors}`}>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <br />
        <label>
          {" "}
          QUANTITY
          <input
            type="text"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </label>
      </fieldset>
      <button className={`${styles.update}`}>Update</button>
    </form>
  );
}

export default UpdateButton;
