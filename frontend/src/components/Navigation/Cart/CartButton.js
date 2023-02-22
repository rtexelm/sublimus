import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, getItems } from "../../../store/cart";
import { Link } from "react-router-dom";
import cartIcon from "../../../assets/icons8-shopping-cart-64.png";
import NavCartItem from "./NavCartItem";
import NavCartLinks from "./NavCartLinks";
import styles from "./cart.module.scss";

function CartButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  const items = useSelector(getItems);
  const emptyCartLink = () => {
    if (sessionUser) {
      return (
        <Link className={styles.shopLink} to="/featured">
          Start Shopping
        </Link>
      );
    } else {
      return (
        <Link className={styles.shopLink} to="/login">
          Sign In
        </Link>
      );
    }
  };

  const totalItems = () => {
    let total = 0;
    for (const i of items) {
      total += i.quantity;
    }
    return total;
  };

  const containItems = sessionUser && totalItems() > 0;

  const subTotal = () => {
    let total = 0;
    for (const i of items) {
      total += i.quantity * i.price;
    }
    return total.toFixed(2);
  };

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    dispatch(fetchItems());

    const closeMenu = () => {
      setShowMenu(false);
      // setTimeout(() => {
      //   setShowMenu(false);
      // }, 1000);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu, sessionUser, dispatch]);

  const navCart = items.map((item) => {
    return <NavCartItem key={item.id} item={item} />;
  });

  return (
    <>
      <button className={`${styles.button}`} onClick={openMenu}>
        <img className={`${styles.cartIcon}`} src={cartIcon} alt="Cart Icon" />
        {containItems && <span className={`${styles.cartStatus}`}></span>}
      </button>
      {showMenu && (
        <div className={`${styles.cartDropdown}`}>
          {containItems && (
            <>
              <ul>{navCart}</ul>
              <NavCartLinks total={subTotal()} count={totalItems()} />
            </>
          )}
          {!containItems && emptyCartLink()}
        </div>
      )}
    </>
  );
}

export default CartButton;
