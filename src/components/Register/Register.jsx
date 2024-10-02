import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSetUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password.trim().length < 8) {
      setError("Hasło nie może być krótsze niż 8 znaków");
      return;
    }

    try {
      const usernameQuery = await getDocs(
        query(collection(db, "users"), where("username", "==", username))
      );

      if (!usernameQuery.empty) {
        setError("Nazwa użytkownika jest już zajęta");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const uid = user.uid;

      await setDoc(doc(db, "users", uid), {
        username: username,
        email: user.email,
      });

      setUsername("");
      setEmail("");
      setPassword("");

      navigate("/chat");
    } catch {
      setError("Rejestracja nie powiodła się");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleRegister}>
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
          value={username}
          onChange={handleSetUsername}
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
          autoComplete="off"
          value={password}
          onChange={handleSetPassword}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.button}>Zarejestruj się</button>
      <div className={styles.item}>
        <p className={styles.question}>Masz już konto?</p>
        <Link to="/login" className={styles.link}>
          Zaloguj się
        </Link>
      </div>
    </form>
  );
};

export default Register;

/*

import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSetUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const usernameRef = doc(db, "users", username);
      const usernameSnapshot = await getDoc(usernameRef);

      if (usernameSnapshot.exists()) {
        setError("Nazwa użytkownika jest już zajęta");
        return;
      }

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;

      await setDoc(usernameRef, {
        uid: user.uid,
        email: user.email,
        username: username,
      });

      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError("Rejestracja nie powiodła się: " + error);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleRegister}>
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
          value={username}
          onChange={handleSetUsername}
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
          autoComplete="off"
          value={password}
          onChange={handleSetPassword}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.button}>Zarejestruj się</button>
      <div className={styles.item}>
        <p className={styles.question}>Masz już konto?</p>
        <Link to="/login" className={styles.link}>
          Zaloguj się
        </Link>
      </div>
    </form>
  );
};

export default Register;

*/
