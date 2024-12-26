import { useSelector } from "react-redux";
import { selectOneRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { OneRestaurantTab } from "./one-restaurant-tab";

export const OneRestaurantTabContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectOneRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return <OneRestaurantTab restaurant={restaurant} id={id} />;
};
