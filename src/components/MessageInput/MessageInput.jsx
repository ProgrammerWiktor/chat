import React from "react";
import styles from "./MessageInput.module.css";

const MessageInput = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Napisz wiadomość"
        className={styles.message}
      />
      <button className={styles.send}>Wyślij</button>
    </div>
  );
};

export default MessageInput;
