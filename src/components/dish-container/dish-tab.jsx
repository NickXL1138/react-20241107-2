import { NavLink } from "react-router-dom";
import styles from "./dish-tab.module.css";

export const DishTab = ({ id, name }) => {
  return (
    <NavLink to={`/dish/${id}`} className={styles.tabContainer}>
      <div>
        <h4 className={styles.tabHeader}>{name}</h4>
      </div>
    </NavLink>
  );
};
