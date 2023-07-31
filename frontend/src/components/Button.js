import React, { useState } from 'react';
import axios from 'axios';

const Button = () => {
  const [result, setResult] = useState('');

  const handleRunPythonScript = async () => {
    try {
      const dataToPython = { /* Los datos que deseas pasar al script de Python */ };

      // Realiza la solicitud al servidor para ejecutar el script de Python
      const response = await axios.post('/run-python-script', { dataToPython });

      // Maneja los resultados recibidos del servidor
      setResult(response.data);
    } catch (error) {
      console.error('Error al ejecutar el script de Python:', error);
    }
  };

  return (
    <div>
      <button onClick={handleRunPythonScript}>Ejecutar script de Python</button>
      <div>{result}</div>
    </div>
  );
};

export default Button;
