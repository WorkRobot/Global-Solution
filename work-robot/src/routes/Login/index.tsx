import { Link, useNavigate } from "react-router-dom";
import WorkRobot from "../../assets/robo.png"; 
import Formulario from "../../components/Formulario/Formulario";
import { supabase } from "../../services/workrobotClient";
import type { FormEvent } from "react";

interface DadosLogin {
  email: string;
  senha: string;
}

interface Usuario {
  id_usu: number;
  nome_usu: string;
  email_usu: string;
  senha_usu: string;
  celular_usu: string;
}

export default function Login() {
  const navigate = useNavigate();

  const camposLogin = [
    { name: "email", type: "email", placeholder: "Seu e-mail", required: true },
    { name: "senha", type: "password", placeholder: "Sua senha", required: true }
  ];

  const handleSubmit = async (dados: DadosLogin, event: FormEvent<HTMLFormElement>) => {
    const { email, senha } = dados;

    if (!email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const { data: usuario, error } = await supabase
        .from("usuario")
        .select("*")
        .eq("email_usu", email)
        .single();

      if (error || !usuario) {
        alert("E-mail não encontrado.");
        return;
      }

      // AQUI TÁ A CONST QUE VOCÊ QUIS! 👇
      const usuarioLogado = usuario as Usuario;

      if (usuarioLogado.senha_usu !== senha) {
        alert("Senha incorreta.");
        return;
      }

      alert("Login realizado com sucesso.");
      localStorage.setItem("usuario", JSON.stringify(usuarioLogado));
      (event.target as HTMLFormElement).reset();
      navigate("/logado");
    } catch {
      alert("Não foi possível realizar o login. Tente novamente.");
    }
  };

  return (
    <main>
      <div className="texto">
        <h1>Login</h1>
        <p>Bem-vindo! Insira seu e-mail e senha para acessar sua conta.</p>
      </div>

      <div className="contato-container">
        <div>
          <Formulario<DadosLogin>
            campos={camposLogin} 
            onSubmit={handleSubmit} 
            titulo=""
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