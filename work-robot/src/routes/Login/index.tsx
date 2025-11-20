import { Link, useNavigate } from "react-router-dom";
import WorkRobot from "../../assets/robo.png"; 
import Formulario from "../../components/Formulario/Formulario";
import { supabase } from "../../services/workrobotClient";

export default function Login() {
  const navigate = useNavigate();

  const camposLogin = [
    { name: "email", type: "email", placeholder: "Seu e-mail", required: true },
    { name: "senha", type: "password", placeholder: "Sua senha", required: true },
  ];

  const handleSubmit = async (dados, event) => {
    const { email, senha } = dados;

    const { data: usuario, error } = await supabase
      .from("usuario")
      .select("*")
      .eq("email_usu", email)
      .single();

    if (error || !usuario) {
      alert("E-mail não encontrado!");
      return;
    }

    if (usuario.senha_usu !== senha) {
      alert("Senha incorreta!");
      return;
    }

    alert("Login realizado com sucesso!");

    localStorage.setItem("usuario", JSON.stringify(usuario));

    event.target.reset();

    navigate("/logado");
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
          <Formulario 
            campos={camposLogin} 
            onSubmit={handleSubmit} 
            buttonLabel="Entrar" 
          />

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
