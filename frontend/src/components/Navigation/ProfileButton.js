import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { NavLink } from "react-router-dom";
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
          <i class="fa-regular fa-user fa-xl"></i>
        </button>
        {showMenu && (
          <ul className={styles.profileDropdown}>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={logout}>Log Out</button>
            </li>
          </ul>
        )}
      </>
    );
  } else {
    return (
      <>
        <button className={styles.button} onClick={openMenu}>
          <i class="fa-regular fa-user fa-xl"></i>
        </button>
        {showMenu && (
          <ul className={styles.profileDropdown}>
            <li>
              <NavLink className={styles.profileLink} to="/login">
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.profileLink} to="/signup">
                Sign Up
              </NavLink>
            </li>
          </ul>
        )}
      </>
    );
  }
}

export default ProfileButton;
