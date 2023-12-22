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
Stack.prototype.size = function(){
    return this.arr.length
}

// Crear instancia del Stack:
let miStack = new Stack()

// Añadir al Stack:
miStack.push('this is A')
miStack.push('this is B')
miStack.push('this is C')
miStack.push('this is D')
console.log(miStack)

    // Medida de mi Stack
    console.log(miStack.size())

// Quitar del Stack:
miStack.pop()
console.log(miStack)

    // Medida de mi Stack
    console.log(miStack.size())

miStack.pop()
console.log(miStack)

miStack.pop()
console.log(miStack)

    // Medida de mi Stack
    console.log(miStack.size())




// Queue (Cola) | FIFO (First In First Out) | handle: push() y shift()
function Queue(){
    this.arr = [];
}

Queue.prototype.enqueue = function(value){
    this.arr.push(value)
};
Queue.prototype.dequeue = function(){
    return this.arr.shift()
};
Queue.prototype.size = function(){
    return this.arr.length
};

// Queue testing:
let miCola = new Queue()
console.log(miCola)
    /* size */ console.log(miCola.size())

miCola.enqueue('one')
miCola.enqueue('two')
miCola.enqueue('three')
console.log(miCola)

    /* size */ console.log(miCola.size())

// Queue flow ...
miCola.dequeue()
miCola.enqueue('four')
console.log(miCola)

miCola.dequeue()
miCola.enqueue('five')
console.log(miCola)

miCola.dequeue()
miCola.enqueue('six')
console.log(miCola)

miCola.dequeue()
miCola.enqueue('seven')
console.log(miCola)

miCola.dequeue()
miCola.enqueue('eight')
console.log(miCola)

miCola.dequeue()
miCola.enqueue('nine')
console.log(miCola)

miCola.dequeue()
miCola.enqueue('ten')
console.log(miCola)

    /* size */ console.log(miCola.size())