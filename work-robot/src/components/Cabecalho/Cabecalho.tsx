import Menu from "../Menu/Menu";
import pasta from "../../assets/pasta.png";
import { useTheme } from "../../context/ThemeContext";

export default function Cabecalho() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="pasta">
        <img src={pasta} alt="Desenho de uma pasta de trabalho" className="w-10 h-10" />
        <h1>WorkRobot</h1>
      </div>

      <div className="flex items-center gap-4">
        <Menu />

        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
