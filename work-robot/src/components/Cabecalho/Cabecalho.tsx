import Menu from "../Menu/Menu";
import pasta from "../../assets/pasta.png"

export default function Cabecalho() {
  return (
    <header>
      <div className="pasta">
        <img src={pasta} alt="Desenho de uma pasta de trabalho" className="w-10 h-10" />
        <h1>WorkRobot</h1>
      </div>
      <Menu />
    </header>
  );
}
