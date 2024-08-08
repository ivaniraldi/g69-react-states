import { useState } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [error, setError] = useState(false);


  const validarDatos = (e) => {
    e.preventDefault();
    //Validación
    if (!nombre.trim() || !apellido.trim() || !edad.trim() || !email.trim()|| !email2.trim() || email != email2 || edad < 18 ) {
      setError(true);
      return;
    }
    setError(false);
    setEmail("")
    setEmail2("")
    setEdad("")
    setApellido("");
    setNombre("")

  };

  return (
    <>
      <form onSubmit={validarDatos} className="formulario">
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            className="form-control"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </div>
        <div className="form-group">
          <label>Edad</label>
          <input
            type="text"
            name="edad"
            className="form-control"
            onChange={(e) => setEdad(e.target.value)}
            value={edad}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Confirma tu Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail2(e.target.value)}
            value={email2}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
        {error? <p style={{color:"red"}}>Verifica todos los campos</p> : null}
      </form>

    </>
  );
}
