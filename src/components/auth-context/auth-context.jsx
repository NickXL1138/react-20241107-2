import { useState } from "react";
import { AuthCreateContext } from "./auth-create-context";

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState({ isAuthorized: false });

  return (
    <AuthCreateContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthCreateContext.Provider>
  );
};
