import React, { useState } from "react";
import styles from "./UserSearch.module.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatItem from "../ChatItem/ChatItem";

const UserSearch = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const handleSetUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("username", "==", username));

    try {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(doc.data());
      });
    } catch {
      toast.error("Nie udało się wyszukać użytkownika");
    }
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
          value={username}
          onChange={handleSetUsername}
          onKeyDown={handleSearch}
        />
      </div>
      {user && <ChatItem user={user} />}
      <ToastContainer />
    </>
  );
};

export default UserSearch;
