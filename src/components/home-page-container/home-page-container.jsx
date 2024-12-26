import { Link } from "react-router-dom";

import styles from "./home-page-container.module.css";

export const HomePageContainer = ({ title }) => {
  return (
    <Link to="restaurants" className={styles.linkStyle}>
      <h1>{title}</h1>
    </Link>
  );
};
