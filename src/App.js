// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import FormManagementPage from './components/FormManagementPage';
import FormPage from './components/FormPage';
import ResponsePage from './components/ResponsePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/form-management">Gestión de Formularios</Link>
            </li>
            <li>
              <Link to="/response">Respuestas</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form-management" element={<FormManagementPage />} />
          {/* Agregar la ruta con el placeholder para el id */}
          <Route path="/form/:id" element={<FormPage />} />
          <Route path="/response" element={<ResponsePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

