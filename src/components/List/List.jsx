import React from "react";
import styles from "./List.module.css";
import Profile from "../Profile/Profile";

const List = () => {
  return (
    <div className={styles.container}>
      <Profile />
    </div>
  );
};

export default List;
