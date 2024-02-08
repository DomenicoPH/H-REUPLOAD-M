// Objetos Literales

//---------------------------------------------------------------------------------

const nombre = 'Domenico'
const apellido = 'Pagano'
const edad = 37

/* const objetoPersona = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
} */

/* Objetos literales:

    Este código demuestra una característica de ES6 llamada "propiedades abreviadas de 
    objetos" o "shorthand properties". En JavaScript moderno, cuando estás creando un 
    objeto y quieres asignarle propiedades cuyos nombres son iguales a las variables 
    definidas previamente, puedes omitir la parte del valor y simplemente escribir el 
    nombre de la variable. El motor de JavaScript automáticamente asignará el valor 
    de la variable correspondiente a la propiedad del objeto.
*/
const objetoPersona = {
    nombre,
    apellido,
    edad
}

console.log(objetoPersona)