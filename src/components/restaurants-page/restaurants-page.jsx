import { Restaurant } from "../restaurant/restaurant.jsx";
import { restaurants } from "../../mock/mock.js";
import { Button } from "../button/button.jsx";
import { useState } from "react";
import styles from "./restaurants-page.module.css";

export const RestaurantsPage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  const restaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div className={styles.restaurantPage}>
      {restaurants.map((restaurant) => (
        <>
          <Button
            onClick={() => restaurantSelect(restaurant)}
            viewVariant="restaurantsPage"
          >
            {restaurant.name}
          </Button>
        </>
      ))}
      <Restaurant restaurant={selectedRestaurant} />
    </div>
  );
};
