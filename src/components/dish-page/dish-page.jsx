import { DishCount } from "../dish-count/dish-count";
import { useAuth } from "../auth-context/use-auth";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import styles from "./dish-page.module.css";

export const DishPage = () => {
  const { isAuth } = useAuth();
  const { dishId } = useParams();
  const { name, ingredients } = useSelector((state) =>
    selectDishById(state, dishId)
  );

  console.log(name);

  if (!name) {
    return null;
  }

  return (
    <div className={styles.dishContainer}>
      <h3 className={styles.dishHeader}>{name}</h3>
      <span>Ingredients: {ingredients.join(" ")}</span>
      {isAuth.name && <DishCount id={dishId} />}
    </div>
  );
};
