/* Sintaxis de importación y exportación (Frontend)

export const suma = (a,b) => `${a} + ${b} = ${a + b}`
export default {num1, num2}

import { suma, resta } from './funciones';
import {num1, num2} from './variables';
--------------------------------------------------

Módulos: index.js | variables.js | funciones.js | persona.js

*/
import { suma, resta } from './funciones.js';
import {num1, num2} from './variables.js';
import multi from './funciones.js'
import Persona from './persona.js'

console.log(require('./funciones.js'))
console.log(require('./variables.js'))

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

// multi ---------------------------
console.log(multi(5,4))

// persona -------------------------
const newPersona = new Persona('Domenico')
console.log(newPersona)