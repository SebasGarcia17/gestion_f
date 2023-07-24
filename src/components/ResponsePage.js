import React from 'react';

const ResponsePage = () => {
  //lista de respuestas para mostrar de ejemplo
  const respuestasEjemplo = [
    { id: 1, formulario: 'Formulario 1', pregunta: '¿Cuál es tu nombre?', respuesta: 'Juan' },
    { id: 2, formulario: 'Formulario 1', pregunta: '¿Cuál es tu edad?', respuesta: '30' },
    { id: 3, formulario: 'Formulario 2', pregunta: '¿Cuál es tu ciudad de residencia?', respuesta: 'Lima' },
    // Agregar más respuestas aquí...
  ];

  return (
    <div>
      <h2>Página de Respuestas</h2>
      <table>
        <thead>
          <tr>
            <th>Formulario</th>
            <th>Pregunta</th>
            <th>Respuesta</th>
          </tr>
        </thead>
        <tbody>
          {respuestasEjemplo.map((respuesta) => (
            <tr key={respuesta.id}>
              <td>{respuesta.formulario}</td>
              <td>{respuesta.pregunta}</td>
              <td>{respuesta.respuesta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResponsePage;
