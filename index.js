const express = require('express');
const connectDB = require('./configuracion/db');
const userRoutes = require('./rutas/usuario.rutas')

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para recibir JSON
app.use(express.json());

// Rutas del modulo usuario
app.use('/api', userRoutes)

const PUERTO = 3000;
app.listen(PUERTO, () => {
  console.log('Servidor corriendo en http://localhost:', PUERTO);
});