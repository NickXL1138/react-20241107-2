import { Restaurant } from "../restaurant/restaurant.jsx";
import { restaurants } from "../../mock/mock.js";
import { useState } from "react";

export const RestaurantsPage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  const restaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div>
      {restaurants.map((restaurant) => (
        <>
          <button
            key={restaurant.id}
            onClick={() => restaurantSelect(restaurant)}
          >
            {restaurant.name}
          </button>
          <Restaurant restaurant={selectedRestaurant} />
        </>
      ))}
    </div>
  );
};
