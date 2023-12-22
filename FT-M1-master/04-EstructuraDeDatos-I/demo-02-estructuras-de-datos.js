// Estrucutras de datos

// -- Array, Set, Stack, Queue --

// Array

let miArreglo = []

miArreglo.push(2)
miArreglo.push(3)
miArreglo.push(4)
console.log(miArreglo)

miArreglo.unshift(1)
miArreglo.unshift(0)
console.log(miArreglo)

miArreglo.push(5)
miArreglo.push(6)
console.log(miArreglo)

miArreglo.shift(0)
console.log(miArreglo)

miArreglo.pop(6)
console.log(miArreglo)




// Set (no admite repetidos)

let miSet = new Set()

miSet.add(1)

miSet.add(3)
miSet.add(3)

miSet.add(5)
miSet.add(5)
miSet.add(5)

miSet.add(7)
miSet.add(7)
miSet.add(7)
miSet.add(7)

console.log(miSet)




// Stack (Pila) | LIFO (Last In First Out) | handle: push() y pop()

// Función constructora STACK:
function Stack(){
    this.arr = [];
}

Stack.prototype.push = function(value){
    this.arr.push(value)
}
Stack.prototype.pop = function(){
    this.arr.pop()
}

// Crear instancia del Stack:
let miStack = new Stack()

// Añadir al Stack:
miStack.push('this is A')
miStack.push('this is B')
miStack.push('this is C')
miStack.push('this is D')
console.log(miStack)

// Quitar del Stack:
miStack.pop()
console.log(miStack)

miStack.pop()
console.log(miStack)

miStack.pop()
console.log(miStack)




// Queue (Cola) | FIFO (First In First Out)