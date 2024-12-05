import { useTheme } from "../theme-switch/use-theme";

import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({ children, onClick, viewVariant = "default" }) => {
  const { themeValue } = useTheme();

  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, {
        [styles.default]: viewVariant === "default",
        [styles.restaurantsPage]: viewVariant === "restaurantsPage",
        [styles.reviewForm]: viewVariant === "reviewForm",
        [styles.switchThemeButton]: viewVariant === "switchThemeButton",
        [styles.acid]: themeValue === "acid",
      })}
    >
      {children}
    </button>
  );
};
