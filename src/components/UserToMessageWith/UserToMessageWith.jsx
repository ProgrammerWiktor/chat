import React, { useContext } from "react";
import styles from "./UsetToMessageWith.module.css";
import { ChatContext } from "../../ChatContext";

const UserToMessageWith = () => {
  const { isMobile, chatPartner, setChatPartner } = useContext(ChatContext);

  const handleClearChatUser = () => {
    setChatPartner(null);
  };

  return (
    <div className={styles.container}>
      {chatPartner && isMobile && (
        <button
          className={styles.backArrowButton}
          onClick={handleClearChatUser}
        >
          <img
            src="/images/back-arrow.svg"
            alt="Powrót"
            className={styles.backArrowImage}
          />
        </button>
      )}

      <img
        src="/images/blank-profile.png"
        alt="Zdjęcie profilowe"
        className={styles.userImage}
      />
      <p className={styles.name}>Adam Kot</p>
    </div>
  );
};

export default UserToMessageWith;
