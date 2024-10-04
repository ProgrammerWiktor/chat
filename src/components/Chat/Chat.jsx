import React, { useEffect, useRef } from "react";
import styles from "./Chat.module.css";

const Chat = () => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
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
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Aenean et justo dictum nunc condimentum aliquet ut nec
        massa.
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
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Aenean et justo dictum nunc condimentum aliquet ut nec
        massa.
      </div>
      <div className={styles.message}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        bibendum quam nec sapien malesuada condimentum.
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Chat;
