import React, { useContext } from "react";
import styles from "./ChatItem.module.css";
import { ChatContext } from "../../ChatContext";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChatItem = ({ user, lastMessage, pick }) => {
  const { currentUser, setChatPartner } = useContext(ChatContext);

  const startChat = async () => {
    try {
      const chatId = [currentUser.uid, user.uid].sort().join("_");
      const chatRef = doc(db, "chats", chatId);

      const chatSnap = await getDoc(chatRef);

      if (!chatSnap.exists()) {
        await setDoc(chatRef, {
          users: [currentUser.uid, user.uid],
          createdAt: new Date(),
          messages: [],
        });

        const currentUserRef = doc(db, "users", currentUser.uid);
        await updateDoc(currentUserRef, {
          chatIds: arrayUnion(chatId),
        });

        const otherUserRef = doc(db, "users", user.uid);
        await updateDoc(otherUserRef, {
          chatIds: arrayUnion(chatId),
        });
      }
    } catch {
      toast.error("Wystąpił błąd przy rozpoczęciu chatu");
    }
  };

  const handleClick = () => {
    setChatPartner(user.uid);
    pick();
    startChat();
  };

  return (
    <>
      <div className={styles.container} onClick={handleClick}>
        <img
          src={user.photoURL ? user.photoURL : "images/blank-profile.png"}
          alt="Zdjęcie profilu"
          className={styles.profileImage}
        />
        <div className={styles.wrapper}>
          <p className={styles.name}>{user.username}</p>
          {lastMessage && <p className={styles.message}>{lastMessage}</p>}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ChatItem;
