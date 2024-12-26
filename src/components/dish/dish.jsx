import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth-context/use-auth";
import { DishCount } from "../dish-count/dish-count";
import styles from "./dish.module.css";
import { Button } from "../button/button";

export const Dish = ({ dish, id }) => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const onClick = () => navigate(-1);

  if (!dish) {
    return null;
  }

  return (
    <>
      <Button onClick={onClick} viewVariant="backToRestaurants">
        К меню
      </Button>
      <div className={styles.dishContainer}>
        <h3 className={styles.dishHeader}>{dish.name}</h3>
        <span>Ingredients: {dish.ingredients.join(" ")}</span>
        {isAuth.name && <DishCount id={id} />}
      </div>
    </>
  );
};
