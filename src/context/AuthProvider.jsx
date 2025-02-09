import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Ensure localStorage is set up
    setLocalStorage();
    // Get data from localStorage
    const { employees, admin } = getLocalStorage();
    if (employees && admin) {
      setUserData({ employees, admin });
    }
  }, []);
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
