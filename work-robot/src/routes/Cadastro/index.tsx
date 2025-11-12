import { Link } from "react-router-dom";
import WorkRobot from "../../assets/robo.png"; 
import Formulario from "../../components/Formulario/Formulario";
export default function Cadastro() {
  const camposCadastro = [
    { name: "nome", type: "text", placeholder: "Seu nome completo", required: true },
    { name: "email", type: "email", placeholder: "Seu e-mail", required: true },
    { name: "senha", type: "password", placeholder: "Crie uma senha", required: true },
    { name: "confirmarSenha", type: "password", placeholder: "Confirme a senha", required: true },
  ];

  const handleSubmit = (dados) => {
    console.log("Cadastro enviado:", dados);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <main>
      <div className="texto">
        <h1>Cadastro</h1>
        <p>
          Crie sua conta WorkRobot preenchendo os campos abaixo.
        </p>
      </div>

      <div className="contato-container">
        <div>
          <Formulario campos={camposCadastro} onSubmit={handleSubmit} buttonLabel="Cadastrar" />
          <p className="cadastro-texto">
            Já tem uma conta?{" "}
            <Link to="/login" className="cadastro-link">
              Faça login
            </Link>
          </p>
        </div>
        <img 
          className="robocontato" 
          src={WorkRobot} 
          alt="Foto do WorkRobot, um robo azul e amarelo" 
        />
      </div>
    </main>
  );
}
