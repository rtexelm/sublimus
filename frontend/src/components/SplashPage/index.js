import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from "./SplashPage.module.scss";

function SplashPage() {
  return (
    <main>
      <article className={`${styles.splashFeature} ${styles.spotlight}`}>
        {/* <h1 className={`${styles.announce}`}>Holiday Sale</h1> */}
        <img
          src="https://s3.amazonaws.com/criterion-production/spotlight_images/4245-aa50a5f37415a5b31d01577f73327950/I7ltCM01T3eYLeC94Ag5Gd1zTTgcNP_w700.png"
          alt="Film screen cap"
        />
        <NavLink className={`${styles.authLink}`} to="/login">
          Login Here
        </NavLink>
      </article>
    </main>
  );
}

export default SplashPage;
