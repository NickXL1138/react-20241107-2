import { Count } from "./count";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <li key={dish.name}>
            {dish.name}
            <Count />
          </li>
        ))}
      </ul>
    </>
  );
};
