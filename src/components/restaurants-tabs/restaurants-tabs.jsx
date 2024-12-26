import { OneRestaurantTabContainer } from "../one-restaurant-tab/one-restaurant-tab-container.jsx";
import styles from "./restaurants-tabs.module.css";

export const RestaurantsTabs = ({ restaurantsIds }) => {
  return (
    <div className={styles.restaurantsTabsContainer}>
      <h2 className={styles.restaurantsPageHeader}>Рестораны</h2>
      <div className={styles.restaurantsTabs}>
        {restaurantsIds.map((id) => (
          <OneRestaurantTabContainer key={id} id={id} />
        ))}
      </div>
    </div>
  );
};
