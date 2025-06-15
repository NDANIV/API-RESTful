/**
 * Configura y establece la conexión a MongoDB.
 */

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    //conexion 
    await mongoose.connect('mongodb+srv://nicolasdaniel1516:admin@db1.fojcami.mongodb.net/?retryWrites=true&w=majority&appName=DB1', {
    });
    console.log('Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;