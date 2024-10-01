import React, { useContext } from "react";
import styles from "./ChatItem.module.css";
import { ChatContext } from "../../ChatContext";

const ChatItem = () => {
  const { setChatPartner } = useContext(ChatContext);

  const handleClick = () => {
    setChatPartner("Adam Kot");
  };

  return (
    <div className={styles.container} onClick={handleClick}>
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
