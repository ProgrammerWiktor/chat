import React, { useContext } from "react";
import styles from "./ChatItem.module.css";
import { ChatContext } from "../../ChatContext";

const ChatItem = ({ user, lastMessage }) => {
  const { setChatPartner } = useContext(ChatContext);

  const handleClick = () => {
    setChatPartner(user.username);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <img
        src={user.photoURL}
        alt="Zdjęcie profilu"
        className={styles.profileImage}
      />
      <div className={styles.wrapper}>
        <p className={styles.name}>{ user.username }</p>
        {lastMessage && <p className={styles.message}>{lastMessage}</p>}
      </div>
    </div>
  );
};

export default ChatItem;
