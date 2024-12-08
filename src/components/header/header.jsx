import styles from "./header.module.css";
import { SwitchThemeButton } from "../switch-theme-button/switch-theme-button";
import { AuthButton } from "../auth-button/auth-button";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <header className={styles.headerText}>ANYFOOD</header>
      </div>
      <div className={styles.switchButtonContainer}>
        <SwitchThemeButton />
        <AuthButton />
      </div>
    </div>
  );
};
