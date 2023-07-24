import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FormManagementPage.css';

const FormManagementPage = () => {
  // Estado para almacenar los formularios
  const [formularios, setFormularios] = useState([]);

  // Función para agregar un nuevo formulario
  const agregarFormulario = () => {
    // Crea un nuevo formulario vacío con un título predeterminado
    const nuevoFormulario = {
      id: Date.now(),
      titulo: 'Nuevo Formulario',
      preguntas: [],
    };

    // Agrega el nuevo formulario al estado
    setFormularios([...formularios, nuevoFormulario]);
  };

  // Función para eliminar un formulario por su id
  const eliminarFormulario = (formularioId) => {
    const nuevosFormularios = formularios.filter((formulario) => formulario.id !== formularioId);
    setFormularios(nuevosFormularios);
  };

  return (
    <div className="form-management-container">
      <h2>Gestión de Formularios</h2>
      <button className="form-management-button" onClick={agregarFormulario}>
        Agregar Formulario
      </button>
      <ul className="form-list">
        {formularios.map((formulario) => (
          <li key={formulario.id} className="form-item">
            <h3>{formulario.titulo}</h3>
            <div className="form-item-buttons">
              <Link to={`/form/${formulario.id}`}>
                <button className="form-edit-button">Editar</button>
              </Link>
              <button className="form-delete-button" onClick={() => eliminarFormulario(formulario.id)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormManagementPage;



