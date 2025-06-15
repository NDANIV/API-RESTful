/**
 * Modelo de datos para la entidad Usuario.
 * Incluye nombre, email y edad.
 */

const mongoose = require('mongoose');
const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  edad: Number
});
module.exports = mongoose.model('Usuario', usuarioSchema);