import { useAuth } from "../auth-context/use-auth";
import { DishCount } from "../dish-count/dish-count";
import styles from "./dish-page.module.css";

export const DishPage = ({ name, ingredients, id }) => {
  const { isAuth } = useAuth();

  if (!name) {
    return null;
  }

  return (
    <div className={styles.dishContainer}>
      <h3 className={styles.dishHeader}>{name}</h3>
      <span>Ingredients: {ingredients.join(" ")}</span>
      {isAuth.name && <DishCount id={id} />}
    </div>
  );
};
