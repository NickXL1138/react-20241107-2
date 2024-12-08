import { useContext } from "react";
import { AuthCreateContext } from "./auth-create-context";

export const useAuth = () => useContext(AuthCreateContext);
