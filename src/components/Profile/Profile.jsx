import React, { useContext } from "react";
import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { ChatContext } from "../../ChatContext";

const Profile = () => {
  const { currentUser } = useContext(ChatContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch {
      alert("Błąd podczas wylogowywania");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img
          src={
            currentUser?.photoURL
              ? currentUser.photoURL
              : "/images/blank-profile.png"
          }
          alt="Zdjęcie profilowe"
          className={styles.profileImage}
        />
        <p className={styles.name}>{currentUser?.username}</p>
      </div>
      <button className={styles.logout} onClick={handleLogout}>
        <img
          src="/images/logout.svg"
          alt="Ikona wylogowywania się"
          title="Wyloguj się"
          className={styles.logoutImage}
        />
      </button>
    </div>
  );
};

export default Profile;
