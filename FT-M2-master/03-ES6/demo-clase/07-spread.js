// Spread Operator

// con arreglos... -------------------------------------------------------------------------------------------
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr1)

const referenciaArr1 = arr1
console.log(referenciaArr1)
// 'referenciaArr1' toma como valor la referencia a 'arr1'

const nuevoArr = [...arr1]
console.log(nuevoArr)
// 'nuevoArr' toma los elementos de arr1 y los hace propios (no son instancias del original)

// Los cambios efectuados sobre 'arr1' también afectarán a 'referenciaArr1'
arr1.push(200)
arr1.push(500)
arr1.push(900)

console.log(arr1)
console.log(referenciaArr1)
console.log(nuevoArr)

//---

const numbers = [...nuevoArr,...arr2,7,8,9]
numbers.push(10)
numbers.unshift(0)
console.log(numbers)

            let half = Math.floor(numbers.length / 2)
            let mitad1 = numbers.slice(0,half)
            let mitad2 = numbers.slice(half)
            console.log(mitad1)
            console.log(mitad2)


// con objetos... -------------------------------------------------------------------------------------------
const persona = {
    nombre: 'Pedro',
    edad: 20,
    active: false
};

const personaConApellido = {
    ...persona,                     // Toma las propiedades de 'persona' y las hace suyas.
    apellido: 'Páramo',             // Asigna nuevas propiedades no incluidas en 'persona'.
    active: true                    // Modifica el valor de una propiedad traida de 'persona'.
};

console.log(personaConApellido)