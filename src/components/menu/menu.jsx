import { DishCount } from "../dish-count/dish-count";
import { useAuth } from "../auth-context/use-auth";
import { DishContainer } from "../dish-container/dish-container";
import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
  const { isAuth } = useAuth();

  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuHeader}>Меню</h3>
      <ul>
        {menu.map((id) => (
          <li key={id} className={styles.listItem}>
            <DishContainer id={id} />
            {isAuth.name && <DishCount />}
          </li>
        ))}
      </ul>
    </div>
  );
};
