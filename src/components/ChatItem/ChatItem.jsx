import React from "react";
import styles from "./ChatItem.module.css";

const ChatItem = () => {
  return (
    <div className={styles.container}>
      <img
        src="/images/blank-profile.png"
        alt="Zdjęcie profilu"
        className={styles.profileImage}
      />
      <div className={styles.wrapper}>
        <p className={styles.name}>Adam Kot</p>
        <p className={styles.message}>To jest wiadomość od użytkownika</p>
      </div>
    </div>
  );
};

export default ChatItem;
