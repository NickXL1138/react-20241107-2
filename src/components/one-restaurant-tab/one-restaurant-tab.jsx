import { NavLink } from "react-router-dom";

import styles from "./one-restaurant-tab.module.css";

export const OneRestaurantTab = ({ restaurant, id }) => {
  return (
    <NavLink to={id} className={styles.restaurantTab}>
      {restaurant.name}
    </NavLink>
  );
};
