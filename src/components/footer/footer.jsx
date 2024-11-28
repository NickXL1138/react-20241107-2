import styles from "./footer.module.css";
import classNames from "classnames";

export const Footer = () => {
  return (
    <div className={classNames(styles.footer)}>
      <a className={classNames(styles.contacts)} href="tel:+79994442200">
        +7 (999) 444-22-00
      </a>
    </div>
  );
};
