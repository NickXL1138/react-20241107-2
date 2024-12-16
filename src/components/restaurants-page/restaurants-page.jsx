import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice.js";
import { RestaurantTabContainer } from "../restaurant-tab-container/restaurant-tab-container.jsx";

import styles from "./restaurants-page.module.css";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <div className={styles.restaurantTabsContainer}>
      <h2 className={styles.restaurantPageHeader}>Рестораны</h2>
      <div className={styles.restaurantTabs}>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer key={id} id={id}>
            {id.name}
          </RestaurantTabContainer>
        ))}
      </div>
    </div>
  );
};
