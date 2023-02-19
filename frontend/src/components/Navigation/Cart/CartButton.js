import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchItems, getItems } from "../../../store/cart";
import cartIcon from "../../../assets/icons8-shopping-cart-64.png";
import NavCartItem from "./NavCartItem";
import styles from "./cart.module.scss";
import NavCartLinks from "./NavCartLinks";

function CartButton({ cart }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const sessionUser = useSelector((state) => state.session.user);
  const items = useSelector(getItems);
  const [message, setMessage] = useState("");

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

  // if (!sessionUser) setMessage("Sign In To View Cart");
  // if (items.length === 0) setMessage("Your Cart Is Empty");

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
      // setTimeout(() => {
      //   setShowMenu(false);
      // }, 1000);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const navCart = items.map((item) => {
    return <NavCartItem key={item.id} item={item} />;
  });

  return (
    <>
      <button className={`${styles.button}`} onClick={openMenu}>
        <img className={`${styles.cartIcon}`} src={cartIcon} alt="Cart Icon" />
      </button>
      {showMenu && (
        <div className={`${styles.cartDropdown}`}>
          {items && (
            <>
              <ul>{navCart}</ul>
              <NavCartLinks total={subTotal()} count={totalItems()} />
            </>
          )}
        </div>
      )}
    </>
  );
}

export default CartButton;
