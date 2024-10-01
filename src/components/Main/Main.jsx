import React, { useContext } from "react";
import styles from "./Main.module.css";
import UserToMessageWith from "../UserToMessageWith/UserToMessageWith";
import Chat from "../Chat/Chat";
import MessageInput from "../MessageInput/MessageInput";
import { ChatContext } from "../../ChatContext";

const Main = () => {
  const { isMobile, chatPartner } = useContext(ChatContext);

  if (isMobile && !chatPartner) {
    return null;
  }

  return (
    <div className={styles.container}>
      <UserToMessageWith />
      <Chat />
      <MessageInput />
    </div>
  );
};

export default Main;
