/* Sintaxis de importación y exportación (Frontend)

export const suma = (a,b) => `${a} + ${b} = ${a + b}`
export default {num1, num2}

import { suma, resta } from './funciones';
import {num1, num2} from './variables';
--------------------------------------------------

Módulos: index.js | variables.js | funciones.js

*/
import { suma, resta } from './funciones';
import {num1, num2} from './variables';

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
