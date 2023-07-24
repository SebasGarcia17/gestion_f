import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './FormPage.css'; // Importamos el archivo CSS para los estilos personalizados

const FormPage = () => {
  // Obtenemos el id del formulario desde los parámetros de ruta usando useParams
  const { id } = useParams();

  // lista preguntas
  const preguntasIniciales = [
    { id: 1, texto: '¿Cuál es tu nombre?', tipo: 'texto' },
    { id: 2, texto: '¿Cuál es tu edad?', tipo: 'numero' },
    { id: 3, texto: '¿Cuál es tu ciudad de residencia?', tipo: 'texto' },
    // Agregar más preguntas aquí...
  ];

  // Estado para almacenar las preguntas del formulario
  const [preguntas, setPreguntas] = useState(preguntasIniciales);

  // Estado para la pregunta que está siendo editada
  const [preguntaEditando, setPreguntaEditando] = useState(null);

  // Estado para el texto de la pregunta en el formulario de edición
  const [textoEdicion, setTextoEdicion] = useState('');

  // Estado para almacenar las respuestas del formulario
  const [respuestas, setRespuestas] = useState({});

  // Estado para el título del formulario
  const [tituloFormulario, setTituloFormulario] = useState('Título del Formulario');

  // Función para manejar el cambio en el texto de la pregunta en el formulario de edición
  const handleTextoEdicionChange = (e) => {
    setTextoEdicion(e.target.value);
  };

  // Función para manejar el cambio en el título del formulario
  const handleTituloFormularioChange = (e) => {
    setTituloFormulario(e.target.value);
  };

  // Función para activar el modo de edición de una pregunta existente
  const handleEditarPregunta = (id) => {
    const pregunta = preguntas.find((pregunta) => pregunta.id === id);
    setPreguntaEditando(pregunta);
    setTextoEdicion(pregunta.texto);
  };

  // Función para activar el modo de edición para agregar una nueva pregunta
  const handleAgregarPregunta = () => {
    setPreguntas((prevPreguntas) => [
      ...prevPreguntas,
      { id: Date.now(), texto: '', tipo: 'texto' },
    ]);
  };

  // Función para eliminar una pregunta existente
  const handleEliminarPregunta = (id) => {
    setPreguntas((prevPreguntas) => prevPreguntas.filter((pregunta) => pregunta.id !== id));
  };

  // Función para editar el título del formulario
  const handleEditarTituloFormulario = () => {
    setTituloFormulario(''); // Inicializar el campo de edición con el título actual
  };

  // Función para guardar los cambios de edición del título del formulario
  const handleGuardarTituloFormulario = () => {
    setTituloFormulario(tituloFormulario);
  };

  // Función para cancelar la edición del título del formulario
  const handleCancelarEdicionTituloFormulario = () => {
    setTituloFormulario('Título del Formulario'); // Restaurar el título original
  };

  // Función para guardar los cambios de edición de las preguntas
  const handleGuardarCambios = () => {
    // ... (código anterior para guardar las preguntas)
  };

  // Función para manejar el cambio en las respuestas del formulario
  const handleRespuestaChange = (e) => {
    const { name, value } = e.target;
    setRespuestas((prevRespuestas) => ({
      ...prevRespuestas,
      [name]: value,
    }));
  };

  // Función para enviar las respuestas del formulario
  const handleSubmitRespuestas = () => {
    // Aquí puedes realizar la lógica para enviar las respuestas a la página de respuestas
    // Por ejemplo, guardar las respuestas en una base de datos o enviarlas a través de una API
    // Luego, redirige a la página de respuestas para mostrar las respuestas enviadas
    console.log('Respuestas enviadas:', respuestas);
    // Aquí puedes redirigir a la página de respuestas
  };

  // Función para cancelar la edición de una pregunta
  const handleCancelarEdicion = () => {
    setPreguntaEditando(null);
    setTextoEdicion('');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Formulario de Ejemplo</h2>
      {tituloFormulario !== 'Título del Formulario' ? (
        <div className="form-title-edit">
          <input
            type="text"
            value={tituloFormulario}
            onChange={handleTituloFormularioChange}
            className="form-title-input"
          />
          <button onClick={handleGuardarTituloFormulario} className="form-title-btn">
            Guardar Título
          </button>
          <button onClick={handleCancelarEdicionTituloFormulario} className="form-title-btn">
            Cancelar
          </button>
        </div>
      ) : (
        <h3 className="form-title-display">
          Título del Formulario: {tituloFormulario}{' '}
          <button onClick={handleEditarTituloFormulario} className="form-title-edit-btn">
            Editar Título
          </button>
        </h3>
      )}
      {preguntas.map((pregunta) => (
        <div key={pregunta.id} className="question-container">
          {pregunta.id === preguntaEditando?.id ? (
            <div className="question-edit-container">
              <input
                type={pregunta.tipo === 'numero' ? 'number' : 'text'}
                value={textoEdicion}
                onChange={handleTextoEdicionChange}
                className="question-input"
              />
              <button onClick={handleGuardarCambios} className="question-btn">
                Guardar
              </button>
              <button onClick={handleCancelarEdicion} className="question-btn">
                Cancelar
              </button>
            </div>
          ) : (
            <div className="question-display">
              <span className="question-text">{pregunta.texto}</span>
              <input
                type={pregunta.tipo === 'numero' ? 'number' : 'text'}
                name={`respuesta_${pregunta.id}`}
                value={respuestas[`respuesta_${pregunta.id}`] || ''}
                onChange={handleRespuestaChange}
                className="question-answer-input"
              />
              <button onClick={() => handleEditarPregunta(pregunta.id)} className="question-edit-btn">
                Editar
              </button>
              <button onClick={() => handleEliminarPregunta(pregunta.id)} className="question-delete-btn">
                Eliminar
              </button>
            </div>
          )}
        </div>
      ))}
      <button onClick={handleAgregarPregunta} className="add-question-btn">
        Agregar Pregunta
      </button>
      <button onClick={handleSubmitRespuestas} className="submit-btn">
        Enviar Respuestas
      </button>
    </div>
  );
};

export default FormPage;








