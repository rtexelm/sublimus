import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "../../store/cart";

import styles from "./film.module.scss";

function AddItemButton({ film }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [message, setMessage] = useState("Add To Cart");

  const handleAddItem = (e) => {
    if (!sessionUser) {
      setMessage("Sign In, Please");
    } else {
      const data = { user_id: sessionUser.id, film_id: film.id, quantity: 1 };
      dispatch(createItem(data));
    }
  };

  return (
    <h1 className={`${styles.cartButton}`} onClick={handleAddItem}>
      {message}
    </h1>
  );
}
export default AddItemButton;
