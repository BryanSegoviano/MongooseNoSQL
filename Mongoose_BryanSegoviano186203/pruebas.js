'use strict';

let MetodosMongoose = require('./MetodosMongoose.js');
let noSql = new MetodosMongoose();

//Insertar nuevo dato
// noSql.insertarDato({
//   nombre: 'Bryan',
//   apellido: 'Segoviano',
//   celular: '64444444',
//   edad: 22
// });

//Eliminar dato mediante id
// noSql.eliminarDato('6153ef7f166a79337c922456');

//Actualizar dato mediante su id, actualizando el apellido
// noSql.actualizarDato('6153ef7f166a79337c922456', 'Santos');

//Consultar un solo dato por id
// noSql.consultarUnDato('6153ef7f166a79337c922456');

//Consultar todos los datos de una coleccion
// noSql.consultarTodosDatos();