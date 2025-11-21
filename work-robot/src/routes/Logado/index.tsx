import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Robo from "../../assets/favicon.ico"; 

export default function Logado() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dados = localStorage.getItem("usuario");
    if (!dados) {
      navigate("/login");
      return;
    }
    setUsuario(JSON.parse(dados));
  }, [navigate]);

  if (!usuario) return null;

  return (
    <main>
      <div className="card-logado">

        <img src={Robo} alt="Robô WorkRobot" />

        <h1>Olá, {usuario.nome_usu} :)</h1>
        <p>Bem-vindo ao WorkRobot!</p>

        <div className="card-logado-opcoes">

          <button
            onClick={() => navigate("/quiz")}
            className="card-btn card-btn-amar"
          >
            Fazer Quiz Vocacional
          </button>

          <button
            onClick={() => navigate("/editar")}
            className="card-btn card-btn-esc"
          >
            Editar Usuário
          </button>

          <button
            onClick={() => navigate("/deletar")}
            className="card-btn card-btn-ver"
          >
            Apagar Conta
          </button>

        </div>
      </div>
    </main>
  );
}
