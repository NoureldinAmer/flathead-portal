import React, { createContext, useRef, useState } from "react";

export const HeaderContext = createContext({
  header: "",
  setCurrentHeader: (header) => {},
});

export const HeaderContextProvider = ({ children }) => {
  const [header, setHeader] = useState("Dashboard");

  const setCurrentHeader = (header) => {
    setHeader(header);
  };

  return (
    <HeaderContext.Provider value={{ header, setCurrentHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};
