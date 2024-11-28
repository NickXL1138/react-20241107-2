import styles from "./header.module.css";
import classNames from "classnames";

export const Header = () => {
  return (
    <div className={classNames(styles.header)}>
      <header>ANYFOOD</header>
    </div>
  );
};
