import styles from "./restaurant.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Button } from "../button/button";

export const Restaurant = ({ name }) => {
  const navigate = useNavigate();
  const onClick = () => navigate("/restaurants");

  if (!name) {
    return null;
  }

  return (
    <>
      <Button onClick={onClick} viewVariant="backToRestaurants">
        К ресторанам
      </Button>
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
      </div>
    </>
  );
};
