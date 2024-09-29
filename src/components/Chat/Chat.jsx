import React from "react";
import styles from "./Chat.module.css";

const Chat = () => {
  return (
    <div className={styles.container}>
      <div className={styles.messages}>
        <span>Chats</span>
        <span>Chats</span>
        <span>Chats</span>
      </div>
    </div>
  );
};

export default Chat;
