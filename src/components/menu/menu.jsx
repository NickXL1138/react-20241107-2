import { DishCount } from "../dish-count/dish-count";
import { useAuth } from "../auth-context/use-auth";
import styles from "./menu.module.css";

export const Menu = ({ menu }) => {
  const { isAuth } = useAuth();

  return (
    <div className={styles.menuContainer}>
      <h3 className={styles.menuHeader}>Меню</h3>
      <ul>
        {menu.map(({ id, name }) => (
          <li key={id} className={styles.listItem}>
            {name}
            {isAuth.name && <DishCount />}
          </li>
        ))}
      </ul>
    </div>
  );
};
