const User = require('../modelo/usuario.modelo');

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { nombre, email, edad } = req.body;
    const newUser = new User({ nombre, email, edad });
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado correctamente', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
  }
};

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
  }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el usuario', error: error.message });
  }
};

// Actualizar un usuario por ID
const updateUser = async (req, res) => {
  try {
    const { nombre, email, edad } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { nombre, email, edad },
      { new: true, runValidators: true }
    );
    if (!updatedUser) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json({ message: 'Usuario actualizado correctamente', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message });
  }
};

// Eliminar un usuario por ID
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};