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
      <span className={styles.name}>Adam Kot</span>
    </div>
  );
};

export default ChatItem;
