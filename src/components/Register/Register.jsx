import React from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form className={styles.container}>
      <p className={styles.title}>Rejestracja</p>
      <div className={styles.item}>
        <label htmlFor="username" className={styles.label}>
          Nazwa użytkownika:
        </label>
        <input
          type="text"
          id="username"
          className={styles.input}
          autoComplete="off"
        />
      </div>
      <div className={styles.item}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          className={styles.input}
          autoComplete="off"
        />
      </div>
      <div className={styles.item}>
        <label htmlFor="password" className={styles.label}>
          Hasło:
        </label>
        <input
          type="password"
          id="password"
          className={styles.input}
          autoComplete="off"
        />
      </div>
      <button className={styles.button}>Zarejestruj się</button>
      <div className={styles.item}>
        <p className={styles.question}>Maszjuż konto?</p>
        <Link to="/login" className={styles.link}>
          Zaloguj się
        </Link>
      </div>
    </form>
  );
};

export default Register;
