import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "./LoginForm.module.scss";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password })).catch(
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
  };

  return (
    <section className={styles.content}>
      <div className={styles.loginForm}>
        <header>SIGN IN</header>
        <p>
          Sign into your My Sublimus account to build your Selections and Wish
          Lists, manage your settings, and more!
        </p>
        <p>
          If you're looking for your Sublimus Channel account, stop because
          there is no such thing
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
              type="email"
              value={email}
              placeholder="E-Mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            <input
              className={styles.text}
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          <button className={styles.submit} type="submit">
            Log In
          </button>
        </form>
      </div>
      <div className={styles.right}></div>
    </section>
  );
}

export default LoginFormPage;
