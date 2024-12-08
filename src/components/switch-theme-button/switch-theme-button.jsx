import { useTheme } from "../theme-switch/use-theme";
import { Button } from "../button/button";

export const SwitchThemeButton = () => {
  const { themeValue, setTheme } = useTheme();

  const toggleTheme = () => {
    if (themeValue === "") {
      setTheme("acid");
    } else {
      setTheme("");
    }
  };

  return (
    <Button onClick={toggleTheme} viewVariant="headerButtons">
      Сменить тему
    </Button>
  );
};
