import { Reviews } from "./reviews.jsx";
import { Menu } from "./menu.jsx";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      <Menu menu={menu} />
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
    </div>
  );
};
