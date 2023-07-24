/* HomePage.js */
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-card">
        <h1>Bienvenido a la Aplicación de Formularios</h1>
        <p>
          En esta aplicación, podrás crear, editar y eliminar formularios desde su página de gestión.
          Cada formulario cuenta con su propia página accesible a través de un enlace. Además,
          contará con una página donde se mostrarán todas las respuestas enviadas a través de los formularios.
        </p>
        <Link to="/form-management">
          <button className="home-page-button">Ir a la Gestión de Formularios</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

