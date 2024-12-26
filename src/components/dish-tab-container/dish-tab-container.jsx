import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import { DishTab } from "./dish-tab";

export const DishTabContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  return <DishTab name={dish.name} id={id} />;
};
