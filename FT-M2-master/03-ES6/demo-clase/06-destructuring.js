// Destructuring (Sintaxis de destructuración)
// Destructuring: Extraer información de objetos y arrays y guardarlos directamente en variables o utilizarla.

/* 
// Lista de coincidencia:
var [a, ,b] = [1,2,3]
    console.log(a)
    console.log(b)
    console.log(a + b)

// Object Matching
var { op: a, lhs: { op: b }, rhs: c } = getASTNode()

// Object Matching (shorthand)
var {op, lhs, rhs} = getASTNode()

// Posición de parámetro
function g({name: x}) {
    console.log(x);
}
g({name: 5})

// Destructuración a prueba de fallas
var [a] = [];
a === undefined;

// A prueba de fallas con default parameter
var [a = 1] = [];
a === 1;
*/

// --------------------------------------------------------- Destructuring (objetos)

const persona1 = {
    nombre: 'Jorge',
    apellido: 'Perez',
    edad: 37,
    email: 'j_perez@mail.com',
    direccion: 'Calle Falsa 123',
    cp: 5115
};
const persona2 = {
    nombre: 'Timoteo',
    apellido: 'Culebrón',
    edad: 45,
    email: 'tcule1980@mail.com',
    direccion: 'Av. Quetim Porta 4',
    cp: 4327
}

function cualquiera(persona1){
    //console.log(obj)
    const {nombre, apellido, email} = persona1   // destructuring
    return {
        nombre,
        apellido,
        email
    }
}

console.log(cualquiera(persona1))

function cualquiera2({nombre,apellido,email}){  // destructuring
return {
    nombre,
    apellido,
    email
}
}

console.log(cualquiera2(persona1))
console.log(cualquiera2(persona2))
    console.log(persona1.nombre)
    console.log(persona2.nombre)
    console.log(persona1.direccion)
    console.log(persona2.direccion)

// --------------------------------------------------------- Destructuring (arreglos)

const arr = ['Facundo', 'Leandro', 'Viviana']
const [pers1, pers2, pers3] = arr
console.log(pers1)
console.log(pers2)
console.log(pers3)

const ejemploArr = ['Valor X', () => {}]
const [valor,funcion] = ejemploArr
console.log(valor)
console.log(funcion)