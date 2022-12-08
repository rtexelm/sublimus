import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from "./SplashPage.module.scss";

function SplashPage() {
  return (
    <main>
      <article className={`${styles.splashFeature} ${styles.spotlight}`}>
        <h1 className={`${styles.announce}`}>Login to test the User Auth</h1>
        <NavLink className={styles.authLink} to="/login">
          Login Here
        </NavLink>
      </article>
    </main>
  );
}

export default SplashPage;
