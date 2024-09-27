import React from "react";
import styles from "./Main.module.css";
import UserToMessageWith from "../UserToMessageWith/UserToMessageWith";

const Main = () => {
  return <div className={styles.container}>
    <UserToMessageWith />
  </div>;
};

export default Main;
