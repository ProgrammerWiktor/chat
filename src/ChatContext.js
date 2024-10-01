import { createContext, useEffect, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [chatPartner, setChatPartner] = useState(null);

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

  return (
    <ChatContext.Provider value={{ isMobile, chatPartner, setChatPartner }}>
      {children}
    </ChatContext.Provider>
  );
};
