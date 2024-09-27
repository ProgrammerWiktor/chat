import React from "react";
import styles from "./List.module.css";
import Profile from "../Profile/Profile";
import UserSearch from "../UserSearch/UserSearch";
import UserChats from "../UserChats/UserChats";

const List = () => {
  return (
    <div className={styles.container}>
      <Profile />
      <UserSearch />
      <UserChats />
    </div>
  );
};

export default List;
