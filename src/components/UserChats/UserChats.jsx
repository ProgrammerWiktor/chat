import React from "react";
import styles from "./UserChats.module.css";
import ChatItem from "../ChatItem/ChatItem";

const UserChats = () => {
  return (
    <div className={styles.container}>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </div>
  );
};

export default UserChats;
