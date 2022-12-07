import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from "./SignupForm.module.scss";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, password })).catch(
        async (res) => {
          let data;
          try {
            // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
          } catch {
            data = await res.text(); // Will hit this case if the server is down
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        }
      );
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <div className={styles.content}>
      <div className={styles.signupForm}>
        <header>CREATE ACCOUNT</header>
        <p>
          Sign up for an account to not earn loyalty points, track fake orders
          and receive no offer or announcements!
        </p>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <br />
          <label>
            <input
              className={styles.text}
              placeholder="E-Mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            <input
              className={styles.text}
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            <input
              className={styles.text}
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          <button className={styles.submit} type="submit">
            Sign Up
          </button>
        </form>
        <p className={styles.question}>ALREADY HAVE AN ACCOUNT?</p>
        <p>
          Sign into your account to manage your settings, track fake orders and
          more!
        </p>
        <br />
        <NavLink className={styles.authLink} to="/login">
          Sign In To Your account
        </NavLink>
      </div>
    </div>
  );
}

export default SignupFormPage;
