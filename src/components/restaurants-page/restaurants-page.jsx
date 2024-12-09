import { useState } from "react";
import styles from "./restaurants-page.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice.js";
import { RestaurantContainer } from "../restaurant/restaurant-container.jsx";
import { RestaurantButtonContainer } from "../restaurant-button-container/restaurant-button-container.jsx";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    restaurantsIds[0]
  );

  const restaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div className={styles.restaurantPage}>
      {restaurantsIds.map((id) => (
        <>
          <RestaurantButtonContainer
            key={id}
            id={id}
            onClick={() => restaurantSelect(id)}
            viewVariant="restaurantsPage"
          >
            {id.name}
          </RestaurantButtonContainer>
        </>
      ))}
      <RestaurantContainer key={selectedRestaurant} id={selectedRestaurant} />
    </div>
  );
};
