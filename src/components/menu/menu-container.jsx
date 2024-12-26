import { useOutletContext } from "react-router-dom";
import { Menu } from "./menu";

export const MenuContainer = () => {
  const { menu } = useOutletContext();

  return <Menu menu={menu} />;
};
