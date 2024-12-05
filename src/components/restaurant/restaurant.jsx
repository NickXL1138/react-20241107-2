import { Reviews } from "../reviews/reviews.jsx";
import { Menu } from "../menu/menu.jsx";
import { ReviewForm } from "../review-form/review-form.jsx";
import { ProgressBar } from "../progress-bar/progress-bar.jsx";

import styles from "./restaurant.module.css";
import classNames from "classnames";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div>
      <ProgressBar />
      <h2 className={classNames(styles.restaurantHeader)}>{name}</h2>
      <Menu menu={menu} />
      <div className={classNames(styles.restaurantReviews)}>
        {Boolean(reviews.length) && <Reviews reviews={reviews} />}
        <ReviewForm />
      </div>
    </div>
  );
};
