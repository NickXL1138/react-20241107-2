import { Button } from "../button/button";
import { useAuth } from "../auth-context/use-auth";
import styles from "./auth-button.module.css";

export const AuthButton = () => {
  const { isAuth, setIsAuth } = useAuth();

  const toggleAuth = () => {
    if (!isAuth.isAuthorized) {
      setIsAuth({ isAuthorized: true, name: "Anon" });
    } else {
      setIsAuth({ isAuthorized: false });
    }
  };

  return (
    <>
      {isAuth.name && <span className={styles.span}>{isAuth.name}</span>}
      <Button onClick={toggleAuth} viewVariant="switchThemeButton">
        {!isAuth.isAuthorized ? "Войти" : "Выйти"}
      </Button>
    </>
  );
};
