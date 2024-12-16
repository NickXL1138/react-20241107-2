import { useNavigate, useParams } from "react-router-dom";
import { RestaurantContainer } from "../restaurant/restaurant-container";

import { Button } from "../button/button";

export const OneRestaurantPage = () => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const onClick = () => navigate("../restaurants");

  return (
    <>
      <Button onClick={onClick} viewVariant="backToRestaurants">
        К ресторанам
      </Button>
      <RestaurantContainer id={restaurantId} />
    </>
  );
};
