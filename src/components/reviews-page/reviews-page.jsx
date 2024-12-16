import { useOutletContext } from "react-router-dom";
import { Reviews } from "../reviews/reviews";
import { ReviewForm } from "../review-form/review-form";
import { useAuth } from "../auth-context/use-auth";
import styles from "./reviews-page.module.css";

export const ReviewsPage = () => {
  const { isAuth } = useAuth();
  const { reviews } = useOutletContext();

  return (
    <div className={styles.restaurantReviews}>
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      {isAuth.name && <ReviewForm />}
    </div>
  );
};
