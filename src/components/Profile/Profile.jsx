import React from "react";
import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch {
      alert("Błąd podczas wylogowywania");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img
          src="/images/blank-profile.png"
          alt="Zdjęcie profilowe"
          className={styles.profileImage}
        />
        <p className={styles.name}>Jan Kowalski</p>
      </div>
      <button className={styles.logout} onClick={handleLogout}>
        <img
          src="/images/logout.svg"
          alt="Ikona wylogowywania się"
          title="Wyloguj się"
          className={styles.logoutImage}
        />
      </button>
    </div>
  );
};

export default Profile;
