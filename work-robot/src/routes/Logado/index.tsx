import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <h1>Olá, {usuario.nome_usu}</h1>
      <p>Bem-vindo ao WorkRobot!</p>

      <div>
        <button 
          onClick={() => navigate("/quiz")}
          className="botao-logado"
        >
          Fazer Quiz Vocacional
        </button>

        <button 
          onClick={() => navigate("/editar")}
          className="botao-logado"
        >
          Editar Usuário
        </button>

        <button 
          onClick={() => navigate("/apagar")}
          className="botao-logado botao-apagar"
        >
          Apagar Conta
        </button>
      </div>
    </main>
  );
}
