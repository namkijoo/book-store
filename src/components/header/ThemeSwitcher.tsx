import { ThemeName } from "../../style/theme";

interface Props {
  themeName: ThemeName;
  setThemeName: (thmeNAme: ThemeName) => void;
}

function ThemeSwitcher({ themeName, setThemeName }: Props) {
  setThemeName(themeName === "light" ? "dark" : "light");

  return <button onClick={}>{themeName}</button>;
}

export default ThemeSwitcher;
