import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <a className={styles.contacts} href="tel:+79994442200">
        +7 (999) 444-22-00
      </a>
    </div>
  );
};
