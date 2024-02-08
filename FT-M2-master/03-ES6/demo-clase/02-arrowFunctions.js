// Arrow Functions

//---------------------------------------------------------------------------------

// Function
function sumar(a,b){
    const resultado = a + b;
    return resultado
}
console.log(sumar(5,3))

// Arrow =>
const sumarAF = (a,b) => {
    const resultado = a + b
    return resultado
}
console.log(sumarAF(5,3))

// Arrow => (short)
const sumarAFshort = (a,b) => a + b
console.log(sumarAFshort(5,3))

//---------------------------------------------------------------------------------

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pares = arr.filter(function(num){
    return num % 2 === 0
})
console.log(pares)

const paresAF = arr.filter((num) => {
    return num % 2 === 0
})
console.log(paresAF)

const paresAFshort = arr.filter((num) => num % 2 === 0) 
console.log(paresAFshort)

//---------------------------------------------------------------------------------(this)

// normal function --------------------------------------- normal function
const bobby = {
    nombre: 'Bobby',
    amigos: ['Athos','Porthos','Aramis'],
    printFriends(){
        this.amigos.forEach(function(amigo){
            console.log(`${this.nombre} conoce a ${amigo}`)
        })
    }
}
bobby.printFriends()

/*  En el primer ejemplo, donde se usa una función normal dentro de forEach, el alcance de this dentro de la función 
    de devolución de llamada cambia. Dentro de la función de devolución de llamada, this ya no apunta al objeto bobby 
    o bob, sino que apunta al objeto global (o undefined en el modo estricto). 
    Esto ocurre porque cuando una función se invoca en el contexto de una función de devolución de llamada, su this 
    no está vinculado al objeto que lo rodea.   */

// arrow function --------------------------------------- arrow function
const bob = {
    nombre: 'Bob',
    amigos: ['Hugo','Paco','Luis'],
    printFriends(){
        this.amigos.forEach((amigo) => {
            console.log(`${this.nombre} conoce a ${amigo}`)
        })
    }
}

bob.printFriends()

/*  Por otro lado, en el segundo ejemplo, donde se usa una arrow function dentro de forEach, this mantiene el mismo 
    valor que en el contexto del método printFriends de bob. Esto se debe a que las arrow functions heredan el valor 
    de this del contexto en el que fueron definidas, y no tienen su propio this vinculado.

    Debido a este comportamiento, en las arrow functions, this se vincula léxicamente en lugar de dinámicamente como 
    en las funciones normales. Esto significa que this en una arrow function siempre se refiere al this del ámbito 
    circundante en el que se definió la arrow function.

    Por lo tanto, cuando se utilizan arrow functions dentro de métodos de objetos, this se refiere al objeto al que 
    pertenece el método, eliminando así la necesidad de usar bind o técnicas similares para conservar el contexto de this.
*/