import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import styles from "./nav.module.scss";
import CartButton from "./Cart/CartButton";

function Navigation() {
  const location = useLocation();
  const sessionUser = useSelector((state) => state.session.user);
  const splash =
    location.pathname === "/" ? styles.navHeadSplash : styles.navHead;
  const [user, setUser] = useState(sessionUser);

  useEffect(() => {
    setUser(sessionUser);
  }, [sessionUser]);

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
          <NavLink className={styles.qLink} to="/featured">
            Shop Featured Picks
          </NavLink>
        </div>
        <CartButton className={`${styles.profileButton}`} user={user} />
        <ProfileButton className={styles.profileButton} user={user} />
      </nav>
    </header>
  );
}

export default Navigation;
