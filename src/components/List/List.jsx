import React, { useContext } from "react";
import styles from "./List.module.css";
import Profile from "../Profile/Profile";
import UserSearch from "../UserSearch/UserSearch";
import UserChats from "../UserChats/UserChats";
import { ChatContext } from "../../ChatContext";

const List = () => {
  const { isMobile, chatPartner } = useContext(ChatContext);

  if (isMobile && chatPartner) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Profile />
      <UserSearch />
      <UserChats />
    </div>
  );
};

export default List;
