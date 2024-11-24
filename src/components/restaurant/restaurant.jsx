import { Reviews } from "../reviews/reviews.jsx";
import { Menu } from "../menu/menu.jsx";
import { ReviewForm } from "../review-form/review-form.jsx";
import { ProgressBar } from "../progress-bar/progress-bar.jsx";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div>
      <ProgressBar />
      <h2>{name}</h2>
      <Menu menu={menu} />
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      <ReviewForm />
    </div>
  );
};
