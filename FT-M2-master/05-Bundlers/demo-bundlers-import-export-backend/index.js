/* Sintaxis de importación y exportación (Backend)

module.exports = {
    element1,
    element2,
}

const {element1, element2} = require('./elements')
--------------------------------------------------

Módulos: index.js | variables.js | funciones.js

*/

const {suma, resta} = require('./funciones')
const {num1, num2} = require('./variables')

console.log(require('./funciones'))
console.log(require('./variables'))

console.log('inicia la ejecución de mi programa');
console.log('Vamos a hacer una suma:')

const resultadoSuma = suma(4,5)
console.log(resultadoSuma)
const resultadoResta = resta(8,5)
console.log(resultadoResta)

console.log(num1)
console.log(num2)
console.log(suma(num1,num2))
console.log(resta(num1,num2))
