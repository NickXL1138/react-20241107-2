import { Outlet, useParams } from "react-router-dom";
import { RestaurantContainer } from "../components/restaurant/restaurant-container";

export const OneRestaurantPage = () => {
  const { restaurantId } = useParams();

  return (
    <>
      <RestaurantContainer id={restaurantId} />
      <Outlet context={{ restaurantId: restaurantId }} />
    </>
  );
};
