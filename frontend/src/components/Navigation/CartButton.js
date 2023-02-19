import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import cartIcon from "../../assets/icons8-shopping-cart-64.png";
import styles from "./profile.module.scss";

function CartButton({ cart }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <>
      <button className={`${styles.button}`} onClick={openMenu}>
        <img className={`${styles.cartIcon}`} src={cartIcon} alt="Cart Icon" />
      </button>
      {showMenu && (
        <ul className={`${styles.profileDropdown}`}>
          <li className={`${styles.menuHeader}`}>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      )}
    </>
  );
}

export default CartButton;
