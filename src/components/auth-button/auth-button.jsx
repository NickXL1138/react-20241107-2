import { Button } from "../button/button";
import { useAuth } from "../auth-context/use-auth";
import styles from "./auth-button.module.css";

export const AuthButton = () => {
  const { isAuth, toggleAuth } = useAuth();

  return (
    <>
      {isAuth.name && (
        <span className={styles.authButtonText}>{isAuth.name}</span>
      )}
      <Button onClick={toggleAuth} viewVariant="headerButtons">
        {!isAuth.isAuthorized ? "Войти" : "Выйти"}
      </Button>
    </>
  );
};
