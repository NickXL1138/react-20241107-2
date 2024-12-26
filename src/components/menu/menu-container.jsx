import { useOutletContext } from "react-router-dom";
import { Menu } from "./menu";
import { useSelector } from "react-redux";
import { useRequest } from "../../redux/hooks/use-request";
import { selectDishesIds } from "../../redux/entities/dishes/dishes-slice";
import { getMenuByRestaurantId } from "../../redux/entities/dishes/get-menu-by-restaurant-id";
import { LoadingScreen } from "../loading-screen/loading-screen";

export const MenuContainer = () => {
  const { restaurantId } = useOutletContext();
  const dishesIds = useSelector(selectDishesIds);

  const requestStatus = useRequest(getMenuByRestaurantId, restaurantId);

  if (requestStatus === "pending") {
    return <LoadingScreen />;
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  return <Menu dishesIds={dishesIds} />;
};
