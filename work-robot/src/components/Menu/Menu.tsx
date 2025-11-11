import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/integrantes">Integrantes</Link>
      <Link to="/cadastro">Cadastro</Link>
      <Link to="/logado">Login</Link>
    </nav>
  );
}
