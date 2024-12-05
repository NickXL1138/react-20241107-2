import { DishCount } from "../count/dish-count";
import styles from "./menu.module.css";
import classNames from "classnames";

export const Menu = ({ menu }) => {
  return (
    <div className={classNames(styles.menu)}>
      <h3 className={classNames(styles.header)}>Меню</h3>
      <ul>
        {menu.map(({ id, name }) => (
          <li key={id} className={classNames(styles.listItem)}>
            {name}
            <DishCount />
          </li>
        ))}
      </ul>
    </div>
  );
};
