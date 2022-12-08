import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) return <Redirect to="/" />;
  return (
    <div className={`${styles.page}`}>
      <h1 className={styles.quickHeading}>{sessionUser.email}</h1>
      <p className={styles.quickP}>{sessionUser.email}</p>
    </div>
  );
}

export default Dashboard;
