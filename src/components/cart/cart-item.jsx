import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import { DishCount } from "../dish-count/dish-count";

export const CartItem = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish.name) {
    return null;
  }

  return (
    <div>
      {dish.name}
      <DishCount id={id} />
    </div>
  );
};
