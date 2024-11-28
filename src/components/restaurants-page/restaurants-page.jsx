import { Restaurant } from "../restaurant/restaurant.jsx";
import { restaurants } from "../../mock/mock.js";
import { useState } from "react";

import styles from "./restaurants-page.module.css";
import classNames from "classnames";

export const RestaurantsPage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  const restaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div className={classNames(styles.restaurantPage)}>
      {restaurants.map((restaurant) => (
        <>
          <button
            className={classNames(styles.button)}
            key={restaurant.id}
            onClick={() => restaurantSelect(restaurant)}
          >
            {restaurant.name}
          </button>
        </>
      ))}
      <Restaurant restaurant={selectedRestaurant} />
    </div>
  );
};
