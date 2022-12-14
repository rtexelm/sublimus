import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink } from "react-router-dom";
import userIcon from "../../assets/icons8-user-48.png";
import styles from "./profile.module.scss";

function ProfileButton({ user }) {
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

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  if (user) {
    return (
      <>
        <button className={styles.button} onClick={openMenu}>
          <img
            className={`${styles.userIcon}`}
            src={userIcon}
            alt="Profile Icon"
          />
          {/* <i className="fa-regular fa-user fa-xl"></i> */}
        </button>
        {showMenu && (
          <ul className={styles.profileDropdown}>
            <li className={styles.menuHeader}>
              <NavLink to="/Dashboard">My Sublimus</NavLink>
            </li>
            <li className={styles.menuItem}>{user.email}</li>
            <li>
              <button className={styles.logout} onClick={logout}>
                Log Out
              </button>
            </li>
          </ul>
        )}
      </>
    );
  } else {
    return (
      <>
        <button className={styles.button} onClick={openMenu}>
          <img
            className={`${styles.userIcon}`}
            src={userIcon}
            alt="Profile Icon"
          />
          {/* <i className="fa-regular fa-user fa-xl"></i> */}
        </button>
        {showMenu && (
          <ul className={styles.profileDropdown}>
            <li className={styles.menuHeader}>
              <NavLink to="/login">My Sublimus</NavLink>
            </li>
            <li className={styles.profileLink}>
              <NavLink to="/login">Log In</NavLink>
            </li>
            <li className={styles.profileLink}>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        )}
      </>
    );
  }
}

export default ProfileButton;
