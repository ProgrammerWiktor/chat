import React, { useContext, useEffect, useState } from "react";
import styles from "./UsetToMessageWith.module.css";
import { ChatContext } from "../../ChatContext";

const UserToMessageWith = () => {
  const { isMobile, chatPartner, setChatPartner, getUsernameById } =
    useContext(ChatContext);
  const [chatPartnerUsername, setchatPartnerUsername] = useState("");

  const handleClearChatUser = () => {
    setChatPartner(null);
  };

  useEffect(() => {
    const fetchchatPartnerUsername = async () => {
      if (chatPartner) {
        const name = await getUsernameById(chatPartner);
        setchatPartnerUsername(name);
      }
    };

    fetchchatPartnerUsername();
  }, [chatPartner, getUsernameById]);

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

      {chatPartner && (
        <>
          <img
            src="/images/blank-profile.png"
            alt="Zdjęcie profilowe"
            className={styles.userImage}
          />
          <p className={styles.name}>{chatPartnerUsername}</p>
        </>
      )}
    </div>
  );
};

export default UserToMessageWith;
