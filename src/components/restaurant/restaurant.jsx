import styles from "./restaurant.module.css";
import { NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2 className={styles.restaurantHeader}>{name}</h2>
      <div className={styles.restaurantTabContainer}>
        <NavLink
          className={({ isActive }) =>
            classNames(
              styles.restaurantTab,
              isActive && styles.restaurantTabActive
            )
          }
          to="menu"
        >
          Меню
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            classNames(
              styles.restaurantTab,
              isActive && styles.restaurantTabActive
            )
          }
          to="reviews"
        >
          Отзывы
        </NavLink>
      </div>
      <Outlet context={{ menu: menu, reviews: reviews }} />
    </div>
  );
};
