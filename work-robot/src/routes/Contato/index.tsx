import WorkRobot from "../../assets/robo.png"; 
import Formulario from "../../components/Formulario/Formulario";
import { supabase } from "../../services/workrobotClient";
import type { FormEvent } from "react";

interface DadosContato {
  nome: string;
  email: string;
  telefone: string;
  comentario: string;
}

export default function Contato() {
  const camposContato = [
    { name: "nome", type: "text", placeholder: "Seu nome", required: true },
    { name: "email", type: "email", placeholder: "Seu e-mail", required: true },
    { name: "telefone", type: "tel", placeholder: "Número de telefone", required: true },
    { name: "comentario", type: "textarea", placeholder: "Comentário", required: true },
  ];

  const handleSubmit = async (dados: DadosContato, event: FormEvent<HTMLFormElement>) => {
    const { nome, email, telefone, comentario } = dados;

    if (!nome || !email || !telefone || !comentario) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const { error } = await supabase.from("contato").insert([
        {
          nome_contato: nome,
          email_contato: email,
          telefone_contato: telefone,
          comentario_contato: comentario,
        },
      ]);

      if (error) {
        alert("Erro ao enviar mensagem.");
        return;
      }

      alert("Mensagem enviada com sucesso!");
      (event.target as HTMLFormElement).reset();
    } catch {
      alert("Não foi possível enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <main>
      <div className="texto">
        <h1>Contato!</h1>
        <p>
          Queremos ouvir você! Se tiver dúvidas, sugestões ou ideias para melhorar nosso projeto, 
          fique à vontade para nos enviar uma mensagem. Estamos aqui para ajudar e trocar experiências!
        </p>
      </div>
      <div className="contato-container">
        <Formulario<DadosContato> 
          campos={camposContato} 
          onSubmit={handleSubmit} 
          titulo="" 
        />
        <img 
          className="robocontato animate-float" 
          src={WorkRobot} 
          alt="Foto do WorkRobot um robo azul e amarelo" 
        />
      </div>
    </main>
  );
}
