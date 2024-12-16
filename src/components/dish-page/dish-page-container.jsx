import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import { DishPage } from "./dish-page";

export const DishPageContainer = () => {
  const { dishId } = useParams();
  const { name, ingredients } = useSelector((state) =>
    selectDishById(state, dishId)
  );

  return <DishPage id={dishId} name={name} ingredients={ingredients} />;
};
