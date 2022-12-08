import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from "./SplashPage.module.scss";

function SplashPage() {
  return (
    <main>
      <article className={styles.filmSplash}></article>
    </main>
  );
}

export default SplashPage;
