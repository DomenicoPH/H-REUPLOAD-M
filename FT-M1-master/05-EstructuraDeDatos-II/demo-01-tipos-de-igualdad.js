// Tipos de igualdad
/*
    - Igualdad por VALOR
    - Igualdad por REFERENCIA
*/

// IGUALDAD POR VALOR: Cuando trabajamos con valores primitivos (number, string, boolean) la igualdad es por valor.
var x = 10;
var y = x;
x = 5;
console.log(x);
console.log(y);

var x = 10
x = 5
var y = x
console.log(x)
console.log(y)

// IGUALDAD POR REFERENCIA: Cuando trabajamos con arrays y objetos la igualdad es por referencia.
var x = [1, 2, 3];
var y = x
x.push(4)
console.log(x)
console.log(y)

//---

// Con objetos...
var persona1 = {
    nombre: 'Domenico',
    apellido: 'Pagano',
}

console.log(persona1)
console.log(`${persona1.nombre} ${persona1.apellido}`)

persona1.nombre = 'Perencejo'
persona1.apellido = 'Macanudo'

console.log(persona1)
var persona2 = persona1
console.log(persona2)
var persona3 = persona2
console.log(persona3)

console.log(`${persona1.nombre} ${persona1.apellido}`)
console.log(`${persona2.nombre} ${persona2.apellido}`)
console.log(`${persona3.nombre} ${persona3.apellido}`)

//test
function personaTester(pers1, pers2){
    if(pers1 === pers2){
        return true
    } else {
        return false
    }
}
console.log(personaTester(persona1,persona2))
console.log(personaTester(persona2,persona3))
console.log(personaTester(persona3,persona1))

var criter = {
    nombre: 'Perencejo',
    apellido: 'Macanudo',
}
let persona4 = criter
console.log(persona4)
console.log(persona1)
//Parecen iguales...
console.log(personaTester(persona3,persona4))