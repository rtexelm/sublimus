import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import styles from "./nav.module.scss";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

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
    <header className={styles.navHead}>
      <nav className={styles.navBar}>
        <div className={styles.home}>
          <NavLink className={styles.logoLink} exact to="/">
            <embed
              className={styles.logo}
              src="https://upload.wikimedia.org/wikipedia/commons/5/5d/The_Criterion_Collection_Logo.svg"
            />
          </NavLink>
        </div>
        <ProfileButton className={styles.profileButton} user={sessionUser} />
        {/* {sessionLinks} */}
      </nav>
    </header>
  );
}

export default Navigation;
