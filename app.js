const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const base = 8;

crearArchivo(base)
    .then(nombreArchivo => console.log(`Archivo creado: ${nombreArchivo}`))
    .catch(err => console.log(err));