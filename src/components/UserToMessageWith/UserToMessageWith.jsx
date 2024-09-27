import React from "react";
import styles from "./UsetToMessageWith.module.css";

const UserToMessageWith = () => {
  return (
    <div className={styles.container}>
      <img
        src="/images/blank-profile.png"
        alt="Zdjęcie profilowe"
        className={styles.userImage}
      />
      <p className={styles.name}>Adam Kot</p>
    </div>
  );
};

export default UserToMessageWith;
