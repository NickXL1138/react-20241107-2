import { useSelector } from "react-redux";
import { RestaurantsTabs } from "./restaurants-tabs";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { LoadingScreen } from "../loading-screen/loading-screen";

export const RestaurantsTabsContainer = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === "pending") {
    return <LoadingScreen />;
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  if (!restaurantsIds.length) {
    return null;
  }

  return <RestaurantsTabs restaurantsIds={restaurantsIds} />;
};
