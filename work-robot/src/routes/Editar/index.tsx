import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Formulario from "../../components/Formulario/Formulario";
import { supabase } from "../../services/workrobotClient";

export default function EditarUsuario() {
  const [usuario, setUsuario] = useState(null);
  const [campos, setCampos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dados = localStorage.getItem("usuario");

    if (!dados) {
      navigate("/login");
      return;
    }

    const userData = JSON.parse(dados);
    setUsuario(userData);

    setCampos([
      {
        name: "nome",
        type: "text",
        placeholder: "Seu nome",
        required: true,
        defaultValue: userData.nome_usu
      },
      {
        name: "email",
        type: "email",
        placeholder: "Seu e-mail",
        required: true,
        defaultValue: userData.email_usu
      },
      {
        name: "telefone",
        type: "tel",
        placeholder: "Seu número",
        required: true,
        defaultValue: userData.celular_usu
      },
      {
        name: "senha",
        type: "password",
        placeholder: "Nova senha",
        required: false
      }
    ]);
  }, [navigate]);

  if (!usuario || campos.length === 0) return null;

  const handleSubmit = async (dados) => {
    const { nome, email, telefone, senha } = dados;

    if (!nome || !email || !telefone) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const updateData = {
        nome_usu: nome,
        email_usu: email,
        celular_usu: telefone
      };

      if (senha && senha.trim() !== "") {
        updateData.senha_usu = senha;
      }

      const { error } = await supabase
        .from("usuario")
        .update(updateData)
        .eq("id_usu", usuario.id_usu);

      if (error) {
        alert("Erro ao atualizar.");
        return;
      }

      const atualizado = { ...usuario, ...updateData };
      localStorage.setItem("usuario", JSON.stringify(atualizado));

      alert("Atualizado com sucesso.");
      navigate("/logado");
    } catch {
      alert("Não foi possível atualizar. Tente novamente.");
    }
  };

  return (
    <main>
      <div className="texto">
        <h1>Editar Usuário</h1>
        <p>Atualize suas informações abaixo.</p>
      </div>

      <div className="contato-container">
        <Formulario
          campos={campos}
          onSubmit={handleSubmit}
          buttonLabel="Salvar alterações"
        />
      </div>
    </main>
  );
}
