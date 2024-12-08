import { useContext } from "react";
import { ThemeCreateContext } from "./theme-create-context";

export const useTheme = () => useContext(ThemeCreateContext);
