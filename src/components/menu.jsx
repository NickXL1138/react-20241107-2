import { Count } from "./count";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ id, name }) => (
          <li key={id}>
            {name}
            <Count />
          </li>
        ))}
      </ul>
    </>
  );
};
