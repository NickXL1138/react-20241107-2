import { createRoot } from "react-dom/client";
import { restaurants } from "./mock.js";

createRoot(document.getElementById("root")).render(
  <div>
    {restaurants.map((rest) => (
      <div style={{ border: "solid" }}>
        <h2>{rest.name}</h2>
        <h3>Меню</h3>
        <ul>
          {rest.menu.map((dish) => (
            <li>{dish.name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {rest.reviews.map((rev) => (
            <li>{rev.text}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
