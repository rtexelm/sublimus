import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from "./SplashPage.module.scss";

function SplashPage() {
  return (
    <main>
      <article className={`${styles.splashFeature} ${styles.spotlight}`}>
        <img
          src="https://s3.amazonaws.com/criterion-production/spotlight_images/4245-aa50a5f37415a5b31d01577f73327950/I7ltCM01T3eYLeC94Ag5Gd1zTTgcNP_w700.png"
          alt=""
        />
        <p className={`${styles.announce}`}>
          A sale might be happening but you'll never know, will you?
        </p>
        <NavLink className={`${styles.authLink}`} to="/featured">
          Shop Sublimus!
        </NavLink>
      </article>
    </main>
  );
}

export default SplashPage;

{
  /* <div className={`${styles.videoContainer}`}>
  <video
    src="https://s3.amazonaws.com/criterion-production/spotlight_images/5928-14e0b84d8dba9e5aca717289ea00ce8a/24_Frames_loop_original.mov"
    autoplay="true"
    loop="true"
    preload="auto"
    muted="true"
    width="320"
    height="240"
  ></video>
</div> */
}
