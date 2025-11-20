import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Resultado() {
  const [resultado, setResultado] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const area = localStorage.getItem("quiz_area");
    const curso = JSON.parse(localStorage.getItem("quiz_curso"));

    if (!area || !curso) {
      navigate("/quiz");
      return;
    }

    setResultado({ area, curso });
  }, [navigate]);

  if (!resultado) return null;

  return (
    <main>
      <div className="card-logado">
        <h1>Seu Resultado!</h1>
        <p>Você se encaixa mais na área de {resultado.area}.</p>
        <p>Curso sugerido: {resultado.curso.nome} na plataforma {resultado.curso.plataforma}.</p>

        <div className="card-logado-opcoes">
          <a
            href={resultado.curso.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn card-btn-amar"
          >
            Acessar Curso
          </a>

          <button
            onClick={() => navigate("/quiz")}
            className="card-btn card-btn-ver"
          >
            Refazer Quiz
          </button>

          <button
            onClick={() => navigate("/logado")}
            className="card-btn card-btn-esc"
          >
            Voltar ao Perfil
          </button>
        </div>
      </div>
    </main>
  );
}
