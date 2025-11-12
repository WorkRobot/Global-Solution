import { Link } from "react-router-dom";
import WorkRobot from "../../assets/robo.png"; 
import Formulario from "../../components/Formulario/Formulario";

export default function Login() {
  const camposLogin = [
    { name: "email", type: "email", placeholder: "Seu e-mail", required: true },
    { name: "senha", type: "password", placeholder: "Sua senha", required: true },
  ];

  const handleSubmit = (dados) => {
    console.log("Login enviado:", dados);
    alert("Login realizado com sucesso!");
  };

  return (
    <main>
      <div className="texto">
        <h1>Login</h1>
        <p>
          Bem-vindo! Insira seu e-mail e senha para acessar sua conta.
        </p>
      </div>

      <div className="contato-container">
        <div>
          <Formulario campos={camposLogin} onSubmit={handleSubmit} buttonLabel="Entrar" />
          <p className="cadastro-texto">
            Não tem uma conta?{" "}
            <Link to="/cadastro" className="cadastro-link">
              Cadastre-se
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
