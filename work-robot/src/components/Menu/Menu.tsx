import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/integrantes">Integrantes</Link></li>
        <li><Link to="/login">login</Link></li>
      </ul>
    </nav>
  );
}
