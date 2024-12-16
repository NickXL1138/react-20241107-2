import { DishContainer } from "../dish-container/dish-container";
import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.menuContainer}>
      <ul>
        {menu.map((id) => (
          <li key={id} className={styles.listItem}>
            <DishContainer id={id} key={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
