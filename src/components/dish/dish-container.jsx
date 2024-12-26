import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDishById } from "../../redux/entities/dishes/dishes-slice";
import { Dish } from "./dish";
import { useRequest } from "../../redux/hooks/use-request";
import { getDishById } from "../../redux/entities/dishes/get-dish-by-id";
import { LoadingScreen } from "../loading-screen/loading-screen";

export const DishContainer = () => {
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));

  const requestStatus = useRequest(getDishById, dishId);

  if (requestStatus === "pending") {
    return <LoadingScreen />;
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  return <Dish id={dishId} dish={dish} />;
};
