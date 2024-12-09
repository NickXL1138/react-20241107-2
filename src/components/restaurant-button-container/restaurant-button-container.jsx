import { useSelector } from "react-redux";
import { Button } from "../button/button";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";

export const RestaurantButtonContainer = ({ id, onClick }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return (
    <Button onClick={onClick} viewVariant="restaurantsPage">
      {restaurant.name}
    </Button>
  );
};
