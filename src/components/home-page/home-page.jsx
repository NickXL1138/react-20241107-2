import { Link } from "react-router-dom";

import styles from "./home-page.module.css";

export const HomePage = ({ title }) => {
  return (
    <Link to="restaurants" className={styles.title}>
      <h1>{title}</h1>
    </Link>
  );
};
