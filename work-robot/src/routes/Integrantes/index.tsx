import { useEffect } from "react";
import amandhaImg from "../../assets/amandha.png";
import giovannaImg from "../../assets/nana.png";
import erickImg from "../../assets/erick.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

export default function Integrantes() {
  useEffect(() => {
    document.title = "Integrantes";
  }, []);

  return (
    <main>
      <section>
        <h1>Sobre nós!</h1>
        <p>Olá! Nós somos os integrantes do projeto WorkRobot, uma plataforma web que ajuda pessoas a descobrirem novas áreas profissionais e cursos ideais para o seu perfil. Nosso grupo é formado por estudantes de Análise e Desenvolvimento de Sistemas na FIAP, apaixonados por tecnologia, inovação e inteligência artificial.
        A equipe é composta por Amandha Yumi, Erick Takeshi e Giovanna Bardella, e cada um de nós contribui com habilidades complementares para criar uma experiência completa para os usuários,Role a página para conhecer melhor cada integrante e descobrir suas paixões dentro do projeto!
        </p>
      </section>
    <div className="integrantes-container">
      <section id="amandha">
        <h2>Amandha Yumi Toyota Artulino</h2>
        <img src={amandhaImg} alt="Foto da Amandha Yumi" />
        <p>RM: 563549 - 1TDSPJ</p>
        <p>Eu sou a Amandha Yumi, tenho 19 anos e sou estudante de Análise e Desenvolvimento de Sistemas. Desde que comecei na área de tecnologia, descobri que adoro Front-End, onde posso unir criatividade e lógica para transformar ideias em interfaces interativas e funcionais.</p>
        <div>
          <a
            href="https://www.linkedin.com/in/amandhayumitoyotaartulino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Logo do LinkedIn" />
          </a>
          <a
            href="https://github.com/AmandhaYumi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Logo do GitHub" />
          </a>
        </div>
      </section>

      <section id="giovanna">
        <h2>Giovanna Bardella Gomes</h2>
        <img src={giovannaImg} alt="Foto da Giovanna Bardella" />
        <p>RM: 561439 - 1TDSPJ </p>
        <p>Sou a Giovanna Bardella, uma das integrantes do grupo ADSOS.
          Tenho 22 anos e sou estudante de Análise e Desenvolvimento de Sistemas
          na FIAP. Gosto muito de juntar a lógica com a criatividade. Database
          e ChatBot são minhas áreas favoritas.
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/giovanna-bardella-gomes-950082365"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Logo do LinkedIn" />
          </a>
          <a
            href="https://github.com/nanabardella"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Logo do GitHub" />
          </a>
        </div>
      </section>

      <section id="erick">
        <h2>Erick Takeshi Andrade Nakajune</h2>
        <img src={erickImg} alt="Foto do Erick Takeshi" />
        <p>RM: 566059 - 1TDSPJ</p>
        <p>Sou o Erick Takeshi, um dos integrantes do grupo ADSOS. Tenho
          18 anos e sou aluno da FIAP, estudando Análise e Desenvolvimento de
          Sistemas. Banco de Dados e Inteligência Artificial são minhas áreas
          favoritas.
        </p>
        <div>
          <a
            href="https://br.linkedin.com/in/erick-nakajune-07815a348"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Logo do LinkedIn" />
          </a>
          <a
            href="https://github.com/Etvtaeyo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Logo do GitHub" />
          </a>
        </div>
      </section>
      </div>
    </main>
  );
}
