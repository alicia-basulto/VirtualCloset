const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/run-python-script', (req, res) => {
  // Obtener los datos enviados desde la aplicación React
  const { dataToPython } = req.body;

  // Ejecutar el script de Python y pasar los datos a través de stdin
  const pythonProcess = spawn('python', ['C:\Tech\VirtualCloset\backend\main.py', JSON.stringify(dataToPython)]);

  let result = '';

  // Capturar los datos de stdout (salida estándar del script de Python)
  pythonProcess.stdout.on('data', (data) => {
    result += data.toString();
  });

  // Manejar el evento cuando el script de Python finaliza
  pythonProcess.on('close', (code) => {
    res.send(result); // Devuelve los resultados al cliente React
  });
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});