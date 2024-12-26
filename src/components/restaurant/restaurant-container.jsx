import { useSelector } from "react-redux";
import { Restaurant } from "./restaurant";
import { useRequest } from "../../redux/hooks/use-request";
import { selectOneRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { getOneRestaurantById } from "../../redux/entities/restaurants/get-one-restaurant-by-id";
import { LoadingScreen } from "../loading-screen/loading-screen";

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectOneRestaurantById(state, id));

  const requestStatus = useRequest(getOneRestaurantById, id);

  if (requestStatus === "pending") {
    return <LoadingScreen />;
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  if (!restaurant) {
    return null;
  }

  return <Restaurant name={restaurant.name} id={id} />;
};
