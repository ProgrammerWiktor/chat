import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className={styles.container}>
      <p className={styles.title}>Logowanie</p>
      <div className={styles.item}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input type="email" id="email" className={styles.input} autoComplete="on" />
      </div>
      <div className={styles.item}>
        <label htmlFor="password" className={styles.label}>
          Hasło:
        </label>
        <input type="password" id="password" className={styles.input} autoComplete="on" />
      </div>
      <button className={styles.button}>Zaloguj się</button>
      <div className={styles.item}>
        <p className={styles.question}>Nie masz konta?</p>
        <Link to='/register' className={styles.link}>Zarejestruj się</Link>
      </div>
    </form>
  );
};

export default Login;
