import { useState } from "react";
import { ThemeCreateContext } from "./theme-create-context";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  return (
    <ThemeCreateContext.Provider value={{ themeValue: theme, setTheme }}>
      {children}
    </ThemeCreateContext.Provider>
  );
};
