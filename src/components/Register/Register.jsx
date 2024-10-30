import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import imageCompression from "browser-image-compression";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const navigate = useNavigate();

  const handleSetUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSetPhoto = async (e) => {
    const selectedPhoto = e.target.files[0];

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(selectedPhoto, options);
      setPhoto(compressedFile);

      const previewURL = URL.createObjectURL(compressedFile);
      setPhotoPreview(previewURL);
    } catch {
      toast.error("Nie udało się skompresować zdjęcia");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password.trim().length < 8) {
      toast.info("Hasło nie może być krótsze niż 8 znaków");
      return;
    }

    try {
      const usernameQuery = await getDocs(
        query(collection(db, "users"), where("username", "==", username))
      );

      if (!usernameQuery.empty) {
        toast.error("Nazwa użytkownika jest już zajęta");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const uid = user.uid;

      let photoURL = null;
      if (photo) {
        try {
          const storageRef = ref(storage, `profile_photos/${uid}`);
          await uploadBytes(storageRef, photo);
          photoURL = await getDownloadURL(storageRef);
        } catch {
          toast.error("Nie udało się przesłać zdjęcia profilowego");
        }
      }

      await setDoc(doc(db, "users", uid), {
        uid: uid,
        username: username,
        email: user.email,
        photoURL: photoURL,
        chatIds: [],
      });

      setUsername("");
      setEmail("");
      setPassword("");
      setPhoto(null);
      setPhotoPreview(null);

      navigate("/chat");
      setTimeout(() => {
        toast.success("Poprawnie zarejestrowano");
      }, 500);
    } catch {
      toast.error("Rejestracja nie powiodła się");
    }
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleRegister}>
        <p className={styles.title}>Rejestracja</p>
        <div className={styles.item}>
          <img
            src={photoPreview ? photoPreview : "images/blank-profile.png"}
            alt="Zdjęcie profilowe"
            className={styles.profilePicture}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="username" className={styles.label}>
            Nazwa użytkownika:
          </label>
          <input
            required
            type="text"
            id="username"
            className={styles.input}
            autoComplete="off"
            value={username}
            onChange={handleSetUsername}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            required
            type="email"
            id="email"
            className={styles.input}
            autoComplete="off"
            value={email}
            onChange={handleSetEmail}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="password" className={styles.label}>
            Hasło:
          </label>
          <input
            required
            type="password"
            id="password"
            className={styles.input}
            autoComplete="off"
            value={password}
            onChange={handleSetPassword}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor="photo" className={styles.photoInput}>
            Dodaj zdjęcie profilowe
          </label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            style={{ display: "none" }}
            autoComplete="off"
            onChange={handleSetPhoto}
          />
        </div>
        <button className={styles.button}>Zarejestruj się</button>
        <div className={styles.item}>
          <p className={styles.question}>Masz już konto?</p>
          <Link to="/login" className={styles.link}>
            Zaloguj się
          </Link>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Register;
