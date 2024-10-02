import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      setEmail('');
      setPassword('');
      
      navigate("/chat");
    } catch {
      setError("Logowanie nie powiodło się");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleLogin}>
      <p className={styles.title}>Logowanie</p>
      <div className={styles.item}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          className={styles.input}
          autoComplete="on"
          value={email}
          onChange={handleSetEmail}
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
          autoComplete="on"
          value={password}
          onChange={handleSetPassword}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.button}>Zaloguj się</button>
      <div className={styles.item}>
        <p className={styles.question}>Nie masz konta?</p>
        <Link to="/register" className={styles.link}>
          Zarejestruj się
        </Link>
      </div>
    </form>
  );
};

export default Login;
