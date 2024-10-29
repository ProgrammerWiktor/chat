import { createContext, useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [chatPartner, setChatPartner] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const uid = user.uid;
        const userDocRef = doc(db, "users", uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setCurrentUser(userDoc.data());
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Ładowanie...</p>;
  }

  return (
    <ChatContext.Provider
      value={{ isMobile, chatPartner, setChatPartner, currentUser }}
    >
      {children}
    </ChatContext.Provider>
  );
};
