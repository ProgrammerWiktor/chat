import React, { useState } from "react";
import styles from "./UserSearch.module.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatItem from "../ChatItem/ChatItem";

const UserSearch = () => {
  const [usernameToSearch, setUsernameToSearch] = useState("");
  const [searchedUser, setSearchedUser] = useState(null);

  const handleSetUsername = (e) => {
    setUsernameToSearch(e.target.value);
  };

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("username", "==", usernameToSearch)
    );

    try {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setSearchedUser(doc.data());
      });
    } catch {
      toast.error("Nie udało się wyszukać użytkownika");
    }
  };

  const onPickChatPartner = () => {
    setUsernameToSearch("");
    setSearchedUser(null);
  };

  return (
    <>
      <div className={styles.container}>
        <img
          src="/images/search.svg"
          alt="Ikona wyszkukiwania"
          className={styles.searchImage}
        />
        <input
          type="text"
          id="user"
          className={styles.userInput}
          placeholder="Szukaj użytkownika"
          value={usernameToSearch}
          onChange={handleSetUsername}
          onKeyDown={handleSearch}
        />
      </div>
      {searchedUser && (
        <ChatItem user={searchedUser} pick={onPickChatPartner} />
      )}
      <ToastContainer />
    </>
  );
};

export default UserSearch;
