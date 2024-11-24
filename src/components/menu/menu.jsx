import { DishCount } from "../count/dish-count";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ id, name }) => (
          <li key={id}>
            {name}
            <DishCount />
          </li>
        ))}
      </ul>
    </>
  );
};
