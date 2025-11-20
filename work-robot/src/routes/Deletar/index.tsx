import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/workrobotClient";

export default function ApagarUsuario() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dados = localStorage.getItem("usuario");

    if (!dados) {
      navigate("/login");
      return;
    }

    setUsuario(JSON.parse(dados));
  }, [navigate]);

  if (!usuario) return null;

  const handleDelete = async () => {
    const confirmar = window.confirm(
      "Tem certeza que deseja apagar sua conta? Essa ação não pode ser desfeita."
    );

    if (!confirmar) return;

    const { error } = await supabase
      .from("usuario")
      .delete()
      .eq("id_usu", usuario.id_usu);

    if (error) {
      console.error(error);
      alert("Erro ao apagar conta.");
      return;
    }
    localStorage.removeItem("usuario");

    alert("Conta apagada com sucesso!");
    navigate("/login");
  };

  return (
    <main>
      <div className="texto">
        <h1>Apagar Conta</h1>
        <p>Esta ação é permanente. Deseja realmente continuar?</p>
      </div>

      <div className="contato-container">
        <button 
          onClick={handleDelete} 
          className="card-btn card-btn-ver"
        >
          Apagar minha conta
        </button>

        <button 
          onClick={() => navigate("/logado")} 
          className="card-btn card-btn-esc"
        >
          Cancelar
        </button>
      </div>
    </main>
  );
}
