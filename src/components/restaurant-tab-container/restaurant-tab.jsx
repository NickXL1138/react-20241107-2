import { NavLink } from "react-router-dom";

import styles from "./restaurant-tab.module.css";

export const RestaurantTab = ({ id, title }) => {
  return (
    <NavLink to={id} className={styles.restaurantTab}>
      {title}
    </NavLink>
  );
};
