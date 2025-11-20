import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const [passo, setPasso] = useState(0);
  const [pontos, setPontos] = useState({
    frontend: 0,
    backend: 0,
    data: 0,
    devops: 0,
    ia: 0,
    cybersecurity: 0
  });

  const navigate = useNavigate();

  const perguntas = [
    {
      pergunta: "Qual atividade você mais gosta?",
      alternativas: [
        { texto: "Resolver problemas de lógica", area: "backend" },
        { texto: "Criar interfaces bonitas", area: "frontend" },
        { texto: "Organizar e analisar dados", area: "data" },
        { texto: "Garantir que tudo funcione sem falhas", area: "devops" }
      ]
    },
    {
      pergunta: "O que mais te chama atenção?",
      alternativas: [
        { texto: "Apps e sites", area: "frontend" },
        { texto: "Inteligência Artificial", area: "ia" },
        { texto: "Segurança Digital", area: "cybersecurity" },
        { texto: "Banco de Dados", area: "data" }
      ]
    },
    {
      pergunta: "Como você prefere trabalhar?",
      alternativas: [
        { texto: "Criando sistemas complexos no servidor", area: "backend" },
        { texto: "Desenhando interfaces e experiências para usuários", area: "frontend" },
        { texto: "Explorando e interpretando grandes volumes de dados", area: "data" },
        { texto: "Automatizando processos e infraestrutura", area: "devops" }
      ]
    },
    {
      pergunta: "Qual dessas áreas você tem mais interesse em aprender?",
      alternativas: [
        { texto: "Redes e segurança cibernética", area: "cybersecurity" },
        { texto: "Machine Learning e IA", area: "ia" },
        { texto: "Desenvolvimento de sites e apps", area: "frontend" },
        { texto: "Banco de dados e análise de dados", area: "data" }
      ]
    },
    {
      pergunta: "Em qual situação você se sente mais confortável?",
      alternativas: [
        { texto: "Configurar servidores e ambientes de produção", area: "devops" },
        { texto: "Criar protótipos e interfaces visuais", area: "frontend" },
        { texto: "Desenvolver algoritmos e lógica de software", area: "backend" },
        { texto: "Proteger sistemas de ameaças e ataques", area: "cybersecurity" }
      ]
    }
  ];

  const cursos = {
  frontend: {
    nome: "CS50 Web Programming",
    plataforma: "edX / Harvard",
    url: "https://pll.harvard.edu/course/cs50-web-programming-python-and-javascript"
  },
  backend: {
    nome: "Java com Spring Boot",
    plataforma: "Udemy",
    url: "https://www.udemy.com/course/spring-boot-java/"
  },
  data: {
    nome: "Análise de Dados com Python",
    plataforma: "Alison",
    url: "https://alison.com/pt-BR/claro/diploma-em-analise-de-dados-com-python"
  },
  devops: {
    nome: "Linux, Containers e DevOps",
    plataforma: "4Linux",
    url: "https://www.4linux.com.br/"
  },
  ia: {
    nome: "Inteligência Artificial e Machine Learning",
    plataforma: "Google IA",
    url: "https://ai.google/education/"
  },
  cybersecurity: {
    nome: "Cibersegurança / Segurança da Informação",
    plataforma: "DIO (Bootcamp) / Cursos Gratuitos",
    url: "https://www.dio.me/"
  }
};



  function responder(area) {
    setPontos(prev => ({ ...prev, [area]: prev[area] + 1 }));

    if (passo + 1 < perguntas.length) {
      setPasso(passo + 1);
    } else {
      finalizarQuiz();
    }
  }

  function finalizarQuiz() {
    const areaFinal = Object.keys(pontos).reduce(
      (a, b) => (pontos[a] > pontos[b] ? a : b)
    );

    localStorage.setItem("quiz_area", areaFinal);
    localStorage.setItem("quiz_curso", JSON.stringify(cursos[areaFinal]));

    navigate("/resultado");
  }

  return (
    <main>
      <div className="card-logado">
        <h1>{perguntas[passo].pergunta}</h1>

        <div className="card-logado-opcoes">
          {perguntas[passo].alternativas.map((alt, i) => (
            <button
              key={i}
              onClick={() => responder(alt.area)}
              className="card-btn card-btn-amar"
            >
              {alt.texto}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
