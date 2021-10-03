'use strict';

const mongoose = require('mongoose');
const url = 'mongodb://localhost/Pruebas';
const userSchema = mongoose.Schema({
 nombre: String,
 apellido: String,
 celular: String,
 edad: Number
});
const userModel = mongoose.model('trabajadores', userSchema);

class MetodosMongoose {

 async conexionBD() {
  mongoose.connect(url)
   .then(() => console.log('Conexión exitosa'))
   .catch((err) => console.log(err));
 }

 async insertarDato(nuevoUsuario) {
  this.conexionBD();
  const usuario = new userModel({
   nombre: nuevoUsuario.nombre,
   apellido: nuevoUsuario.apellido,
   celular: nuevoUsuario.celular,
   edad: nuevoUsuario.edad
  });
  await usuario.save();
  console.log('Se agrego correctamente el usuario: ' + nuevoUsuario.nombre);
  mongoose.disconnect();
 }

 async eliminarDato(idBuscar) {
  this.conexionBD();
  const user = await userModel.deleteOne({_id: idBuscar});
  console.log('Se elimino correctamente el dato con id: ' + idBuscar);
  mongoose.disconnect();
 }

 async actualizarDato(idBuscar, apellidoNuevo) {
  this.conexionBD();
  const user = await userModel.updateOne({_id: idBuscar}, {$set: {apellido: apellidoNuevo}});
  console.log('El id ' + idBuscar + ' se actualizo correctamente con el dato nuevo: ' + apellidoNuevo);
  mongoose.disconnect();
 }

 async consultarUnDato(idBuscar) {
  this.conexionBD();
  const user = await userModel.findOne({ _id: idBuscar });
  console.log(user);
  mongoose.disconnect();
 }

 async consultarTodosDatos() {
  this.conexionBD();
  const user = await userModel.find();
  console.log(user);
  mongoose.disconnect();
 }



}

module.exports = MetodosMongoose;