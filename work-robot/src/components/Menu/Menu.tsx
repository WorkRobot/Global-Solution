import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [aberto, setAberto] = useState(false);

  return (
    <nav className="menu">
      <button
        className="botao-menu"
        onClick={() => setAberto(!aberto)}
      >
        ☰
      </button>
      <ul className={`lista-menu ${aberto ? "aberto" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/integrantes">Integrantes</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
