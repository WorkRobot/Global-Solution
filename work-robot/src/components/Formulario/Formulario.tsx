export default function Formulario({ campos, onSubmit, titulo }) {
  return (
    <div className="form-container">
      <h2 className="form-titulo">{titulo}</h2>
      <form
        className="form-body"
        onSubmit={(e) => {
          e.preventDefault();
          const dados = {};
          campos.forEach((campo) => {
            dados[campo.name] = e.target[campo.name].value;
          });

          onSubmit(dados, e);
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
