import React, { useContext, useEffect, useRef } from "react";
import styles from "./Chat.module.css";
import { ChatContext } from "../../ChatContext";

const Chat = () => {
  const messagesEndRef = useRef(null);
  const { chatPartner } = useContext(ChatContext);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <>
      {!chatPartner && (
        <div className={styles.containerNoChat}>
          <p className={styles.containerNoChatMessage}>
            Wybierz osobę, z którą chcesz pisać
          </p>
        </div>
      )}
      
      {chatPartner && (
        <div className={styles.container}>
          <div className={styles.yourMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={styles.message}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            bibendum quam nec sapien malesuada condimentum.
          </div>
          <div className={styles.message}>
            <img
              src="/images/landscape.jpg"
              alt="Obraz"
              className={styles.picture}
            />
          </div>
          <div className={styles.yourMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            bibendum quam nec sapien malesuada condimentum. In sed lectus nisi.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Aenean et justo dictum nunc condimentum
            aliquet ut nec massa.
          </div>
          <div className={styles.message}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            bibendum quam nec sapien malesuada condimentum.
          </div>
          <div className={styles.yourMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={styles.yourMessage}>
            <img
              src="/images/landscape.jpg"
              alt="Obraz"
              className={styles.picture}
            />
          </div>
          <div className={styles.message}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            bibendum quam nec sapien malesuada condimentum.
          </div>
          <div className={styles.yourMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            bibendum quam nec sapien malesuada condimentum. In sed lectus nisi.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Aenean et justo dictum nunc condimentum
            aliquet ut nec massa.
          </div>
          <div className={styles.message}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            bibendum quam nec sapien malesuada condimentum.
          </div>
          <div ref={messagesEndRef} />
        </div>
      )}
    </>
  );
};

export default Chat;
