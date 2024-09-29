import React from "react";
import styles from "./Main.module.css";
import UserToMessageWith from "../UserToMessageWith/UserToMessageWith";
import Chat from "../Chat/Chat";
import MessageInput from "../MessageInput/MessageInput";

const Main = () => {
  return (
    <div className={styles.container}>
      <UserToMessageWith />
      <Chat />
      <MessageInput />
    </div>
  );
};

export default Main;
