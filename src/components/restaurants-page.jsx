import { Restaurant } from "./restaurant.jsx";
import { restaurants } from "../mock/mock.js";
import { useState } from "react";

export const RestaurantsPage = () => {
  const { name, menu, reviews } = restaurants[0];
  const [selectedRestaurant, setSelectedRestaurant] = useState({
    name,
    menu,
    reviews,
  });

  const restaurantSelect = ({ name, menu, reviews }) => {
    setSelectedRestaurant((selectedRestaurant) => {
      return {
        ...selectedRestaurant,
        name: name,
        menu: menu,
        reviews: reviews,
      };
    });
  };

  return (
    <div>
      {restaurants.map(({ name, menu, reviews }) => (
        <button
          key={name}
          onClick={() => restaurantSelect({ name, menu, reviews })}
        >
          {name}
        </button>
      ))}
      <Restaurant restaurant={selectedRestaurant} />
    </div>
  );
};
