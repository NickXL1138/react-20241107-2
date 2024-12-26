import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { selectReviewsIds } from "../../redux/entities/reviews/reviews-slice";
import { useRequest } from "../../redux/hooks/use-request";
import { getReviewsByRestaurantId } from "../../redux/entities/reviews/get-reviews-by-restaurant-id";
import { Reviews } from "./reviews";
import { LoadingScreen } from "../loading-screen/loading-screen";

export const ReviewsContainer = () => {
  const { restaurantId } = useOutletContext();
  const reviewsIds = useSelector(selectReviewsIds);

  const requestStatus = useRequest(getReviewsByRestaurantId, restaurantId);

  if (requestStatus === "pending") {
    return <LoadingScreen />;
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  return (
    <> {Boolean(reviewsIds.length) && <Reviews reviewsIds={reviewsIds} />}</>
  );
};
