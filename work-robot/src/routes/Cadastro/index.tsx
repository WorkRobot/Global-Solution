import { Link } from "react-router-dom";
import WorkRobot from "../../assets/robo.png"; 
import Formulario from "../../components/Formulario/Formulario";
import { supabase } from "../../services/workrobotClient";

export default function Cadastro() {
  const camposCadastro = [
    { name: "nome", type: "text", placeholder: "Seu nome completo", required: true },
    { name: "email", type: "email", placeholder: "Seu e-mail", required: true },
    { name: "telefone", type: "tel", placeholder: "Seu número de telefone", required: true },
    { name: "senha", type: "password", placeholder: "Crie uma senha", required: true },
    { name: "confirmarSenha", type: "password", placeholder: "Confirme a senha", required: true },
  ];

  const handleSubmit = async (dados, event) => {
  const { nome, email, telefone, senha, confirmarSenha } = dados;

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  const novoId = Math.floor(1000 + Math.random() * 9000);

  const { data, error } = await supabase
    .from("usuario")
    .insert([
      {
        id_usu: novoId,
        nome_usu: nome,
        email_usu: email,
        senha_usu: senha,
        celular_usu: telefone
      }
    ]);

  if (error) {
    console.error("Erro ao cadastrar:", error);
    alert("Erro ao cadastrar. Veja o console.");
    return;
  }

  alert("Cadastro realizado com sucesso!");
  event.target.reset();
};

  return (
    <main>
      <div className="texto">
        <h1>Cadastro</h1>
        <p>Crie sua conta WorkRobot preenchendo os campos abaixo.</p>
      </div>

      <div className="contato-container">
        <div>
          <Formulario 
            campos={camposCadastro} 
            onSubmit={handleSubmit} 
            buttonLabel="Cadastrar" 
          />

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
