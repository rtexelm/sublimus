import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import styles from "./nav.module.scss";
import CartButton from "./CartButton";
// import getItems from "../../store/cart";

function Navigation() {
  const location = useLocation();
  const sessionUser = useSelector((state) => state.session.user);
  const splash =
    location.pathname === "/" ? styles.navHeadSplash : styles.navHead;

  console.log(location.pathname);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton className={styles.profileButton} user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <>
  //       <NavLink className={styles.profileLink} to="/login">
  //         Log In
  //       </NavLink>
  //       <NavLink className={styles.profileLink} to="/signup">
  //         Sign Up
  //       </NavLink>
  //     </>
  //   );
  // }

  return (
    <header className={splash}>
      <nav className={`${styles.navBar}`}>
        <div className={styles.home}>
          <NavLink className={styles.logoLink} exact to="/">
            <img
              className={styles.logo}
              src="https://upload.wikimedia.org/wikipedia/commons/5/5d/The_Criterion_Collection_Logo.svg"
              alt="Criterion Logo"
            />
          </NavLink>
        </div>
        <div className={`${styles.quickLinks}`}>
          <NavLink className={styles.qLink} to="/films">
            Browse the Selections
          </NavLink>
          <NavLink className={styles.qLink} to="/signup">
            The Create Account Form
          </NavLink>
        </div>
        <CartButton className={`${styles.profileButton}`} />
        <ProfileButton className={styles.profileButton} user={sessionUser} />
        {/* {sessionLinks} */}
      </nav>
    </header>
  );
}

export default Navigation;
