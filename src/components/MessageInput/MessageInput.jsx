import React from "react";
import styles from "./MessageInput.module.css";

const MessageInput = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        id="message"
        placeholder="Napisz wiadomość"
        className={styles.message}
      />
      <input
        type="file"
        accept="image/*"
        id="picture-upload"
        style={{ display: "none" }}
      />
      <label htmlFor="picture-upload" className={styles.sendImageButton}>
        <img
          src="/images/image.svg"
          alt="Wyślij zdjęcie"
          className={styles.sendImageIcon}
        />
      </label>
      <button className={styles.send}>Wyślij</button>
    </div>
  );
};

export default MessageInput;
