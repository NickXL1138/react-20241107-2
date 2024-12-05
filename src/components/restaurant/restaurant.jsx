import { Reviews } from "../reviews/reviews.jsx";
import { Menu } from "../menu/menu.jsx";
import { ReviewForm } from "../review-form/review-form.jsx";
import { ProgressBar } from "../progress-bar/progress-bar.jsx";
import { useAuth } from "../auth-context/use-auth.js";

import styles from "./restaurant.module.css";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;
  const { isAuth } = useAuth();

  if (!name) {
    return null;
  }

  return (
    <div>
      <ProgressBar />
      <h2 className={styles.restaurantHeader}>{name}</h2>
      <Menu menu={menu} />
      <div className={styles.restaurantReviews}>
        {Boolean(reviews.length) && <Reviews reviews={reviews} />}
        {isAuth.name && <ReviewForm />}
      </div>
    </div>
  );
};
