import type { FormEvent } from "react";

interface Campo {
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

interface FormularioProps<T = Record<string, string>> {
  campos: Campo[];
  titulo: string;
  onSubmit: (dados: T, e: FormEvent<HTMLFormElement>) => void | Promise<void>;
}

export default function Formulario<T = Record<string, string>>({
  campos,
  onSubmit,
  titulo,
}: FormularioProps<T>) {
  return (
    <div className="form-container">
      <h2 className="form-titulo">{titulo}</h2>
      <form
        className="form-body"
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const dados: Record<string, string> = {};

          campos.forEach((campo) => {
            const target = e.currentTarget.elements.namedItem(campo.name) as HTMLInputElement;
            dados[campo.name] = target.value;
          });

          onSubmit(dados as T, e);
        }}
      >
        {campos.map((campo) => (
          <input
            key={campo.name}
            type={campo.type}
            name={campo.name}
            placeholder={campo.placeholder}
            required={campo.required}
            className="form-input"
          />
        ))}
        <button type="submit" className="form-button">
          Enviar
        </button>
      </form>
    </div>
  );
}
