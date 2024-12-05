import styles from "./header.module.css";
import { SwitchThemeButton } from "../switch-theme-button/switch-theme-button";
import { AuthButton } from "../auth-button/auth-button";

export const Header = () => {
  return (
    <div className={styles.div}>
      <div>
        <header className={styles.header}>ANYFOOD</header>
      </div>
      <div className={styles.switchButton}>
        <SwitchThemeButton />
        <AuthButton />
      </div>
    </div>
  );
};
