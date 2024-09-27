import React from "react";
import styles from "./UserSearch.module.css";

const UserSearch = () => {
  return (
    <div className={styles.container}>
      <img
        src="/images/search.svg"
        alt="Ikona wyszkukiwania"
        className={styles.searchImage}
      />
      <input
        type="text"
        className={styles.userInput}
        placeholder="Szukaj użytkownika"
      />
    </div>
  );
};

export default UserSearch;
