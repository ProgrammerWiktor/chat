import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
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
      <button className={styles.logout}>
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
