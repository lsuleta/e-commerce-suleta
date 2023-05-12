import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    telefono: ""
  });
  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value });
  }
  const envioDeFormulario = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div>
      <h1>formulario</h1>
      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="tu nombre"
          name="nombre"
          onChange={handleChange}
          value={userData.nombre}
        />
        <input
          type="text"
          placeholder="tu apellido"
          name="apellido"
          onChange={handleChange}
          value={userData.apellido}
        />
        <input
          type="text"
          placeholder="tu telefono"
          name="telefono"
          onChange={handleChange}
          value={userData.telefono}
        />
        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Form;
