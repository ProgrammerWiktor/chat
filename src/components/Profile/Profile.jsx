import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Profile = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch {
      alert("Błąd podczas wylogowywania");
    }
  };

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          const uid = user.uid;

          const userDocRef = doc(db, "users", uid);

          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUsername(userDoc.data().username);
          }
        }
      } catch {
        alert("Nie udało się pobrać nazwy użytkownika");
      }
    };

    fetchUsername();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img
          src="/images/blank-profile.png"
          alt="Zdjęcie profilowe"
          className={styles.profileImage}
        />
        <p className={styles.name}>{username}</p>
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
