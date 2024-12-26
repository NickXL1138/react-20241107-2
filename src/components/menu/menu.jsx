import { DishTabContainer } from "../dish-tab-container/dish-tab-container";
import styles from "./menu.module.css";

export const Menu = ({ dishesIds }) => {
  return (
    <div className={styles.menuContainer}>
      <ul>
        {dishesIds.map((id) => (
          <li key={id} className={styles.listItem}>
            <DishTabContainer id={id} key={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
