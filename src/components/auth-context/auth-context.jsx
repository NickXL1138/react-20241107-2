import { useState } from "react";
import { AuthCreateContext } from "./auth-create-context";

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState({ isAuthorized: false });

  const toggleAuth = () => {
    if (!isAuth.isAuthorized) {
      setIsAuth({ isAuthorized: true, name: "Anon" });
    } else {
      setIsAuth({ isAuthorized: false });
    }
  };

  return (
    <AuthCreateContext.Provider value={{ isAuth, toggleAuth }}>
      {children}
    </AuthCreateContext.Provider>
  );
};
