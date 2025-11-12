import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import fundo from "./assets/fundo.png"; 

export default function App() {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <Cabecalho />
      <Outlet />
      <Rodape />
    </div>
  );
}
