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
      { texto: "Desenhando interfaces e experiências", area: "frontend" },
      { texto: "Explorando grandes volumes de dados", area: "data" },
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
      { texto: "Desenvolver algoritmos e lógica", area: "backend" },
      { texto: "Proteger sistemas de ameaças e ataques", area: "cybersecurity" }
    ]
  },
  {
    pergunta: "O que você acha mais empolgante?",
    alternativas: [
      { texto: "Criar experiências visuais modernas", area: "frontend" },
      { texto: "Construir APIs e sistemas robustos", area: "backend" },
      { texto: "Treinar modelos de Machine Learning", area: "ia" },
      { texto: "Gerenciar servidores e deploys", area: "devops" }
    ]
  },
  {
    pergunta: "Qual tipo de desafio te motiva mais?",
    alternativas: [
      { texto: "Descobrir padrões escondidos nos dados", area: "data" },
      { texto: "Impedir invasões e ataques", area: "cybersecurity" },
      { texto: "Criar sites rápidos e responsivos", area: "frontend" },
      { texto: "Resolver bugs complexos no backend", area: "backend" }
    ]
  },
  {
    pergunta: "Se pudesse escolher um projeto agora, qual seria?",
    alternativas: [
      { texto: "Criar uma página moderna para uma empresa", area: "frontend" },
      { texto: "Construir um sistema de login seguro", area: "backend" },
      { texto: "Criar um modelo de previsão de comportamento", area: "ia" },
      { texto: "Criar pipelines automáticos de deploy", area: "devops" }
    ]
  },
  {
    pergunta: "O que você considera mais importante em tecnologia?",
    alternativas: [
      { texto: "A experiência visual das pessoas", area: "frontend" },
      { texto: "A estrutura e funcionamento interno", area: "backend" },
      { texto: "A segurança dos dados e sistemas", area: "cybersecurity" },
      { texto: "A capacidade de aprender com dados", area: "ia" }
    ]
  },
  {
    pergunta: "Qual habilidade você gostaria mais de dominar?",
    alternativas: [
      { texto: "Criar interfaces e animações", area: "frontend" },
      { texto: "Construir sistemas escaláveis", area: "backend" },
      { texto: "Analisar e prever tendências com dados", area: "data" },
      { texto: "Proteger redes e sistemas", area: "cybersecurity" }
    ]
  }
];

  const cursos = {
  frontend: {
    nome: "Desenvolvimento Front-end: cursos para criar aplicações web com HTML, CSS e JavaScript",
    plataforma: "Alura",
    url: "https://cursos.alura.com.br/formacao-javascript-front-end"
  },
  backend: {
    nome: "Trilha completa de carreira Dev Back-End Java",
    plataforma: "Alura",
    url: "https://cursos.alura.com.br/formacao-trilha-completa-dev-backend-java"
  },
  data: {
    nome: "Administração e performance com Oracle Database",
    plataforma: "Alura",
    url: "https://cursos.alura.com.br/formacao-oracle-database-administracao-performance"
  },
  devops: {
    nome: "Empreendedorismo para Devs",
    plataforma: "Alura",
    url: "https://cursos.alura.com.br/formacao-empreendedorismo-devs"
  },
  ia: {
    nome: "Inteligência artificial e Java: crie ferramentas poderosas e chatbots inteligentes com as APIs da OpenAI",
    plataforma: "Alura",
    url: "https://cursos.alura.com.br/formacao-ia-java-apis-openai"
  },
  cybersecurity: {
    nome: "Cibersegurança",
    plataforma: "Alura",
    url: "https://cursos.alura.com.br/formacao-ciberseguranca"
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
