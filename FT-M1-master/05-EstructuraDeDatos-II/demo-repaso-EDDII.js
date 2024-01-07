// Referencias

// Igualdad por valor:

var x = 10  // x vale 10
var y = x   // y vale lo que valga x (10)
console.log(x)
console.log(y)

x = 100 // x vale 100
y = x   // y vale lo que valga x (100)
console.log(x)
console.log(y)

x = 200 // Desde ahora x vale 200
console.log(x)
console.log(y)

// Igualdad por referencia:

var x = [3,5,6,7]
y = x
console.log(x)
console.log(y)

x.push(8)
x.push(9)
x.splice(1,0,4)
x.unshift(2)
x.unshift(1)

y.unshift(0)
y.push(10)

console.log(x)
console.log(y)

y = [...x].reverse()
x = x.map((num) => `${num} x 13 = ` + num * 13)

console.log(x)
console.log(y)

// -----------------------------------------------------------------------
// *** Tablas de Multiplicación:

/* Función tablaX - Retorna los valores resultantes de multiplicar
   el número pasado por parámetro (num) por todos los valores del
   array multi = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] */

function tablaX(num){
    let multi = [1,2,3,4,5,6,7,8,9,10,11,12]
    return multi.map((n) => n * num)
};

console.log(tablaX(1))
console.log(tablaX(3))
console.log(tablaX(6))
console.log(tablaX(9))
console.log(tablaX(10))
console.log(tablaX(12))
console.log(tablaX(37))

// -----------------------------------------------------------------------

var persona1 = {
    nombre: 'Domenico',
    apellido: 'Pagano'
}

var persona2 = persona1

console.log(persona1)
console.log(persona2)

persona1.nombre = 'Cualquier nombre'

console.log(persona1)
console.log(persona2)
// ---------------------------------------------------------------



// EDDII --> Listas enlazadas   'Linked List'

// Linked List ---------------------------------------------------
function LinkedList(){
    this.head = null        // Representa la cabeza de la lista. Inicialmente apunta a null pero se puede enlazar con un nodo.
};
// Node ----------------------------------------------------------
function Node(value){
    this.value = value      // almacena un valor/dato en el nodo
    this.next = null        // guarda una referencia a otro nodo
};
// Métodos ------------------------------------------------------- Métodos

//  push  |  Añade nodo al final de la lista --------------------- push
LinkedList.prototype.push = function(value){
    let node = new Node(value)
    let current = this.head
    // add en lista vacia
    if(!current){
        this.head = node
        return value
    }
    // add en lista NO vacia
    while(current.next){
        current = current.next
    }
    current.next = node
    return value
};

// unshift  |  Añade nodo al comienzo de la lista ---------------- unshift
LinkedList.prototype.unshift = function(value){
    let node = new Node(value)
    node.next = this.head
    this.head = node
    return value
}

// printList   |   Imprime la lista ------------------------------ printList
LinkedList.prototype.printList = function(){
    let current = this.head
    while(current){
        console.log(current.value)
        current = current.next
    }
}

const myLinkedList = new LinkedList()

myLinkedList.push([2, 'dos'])
myLinkedList.unshift([1, 'uno'])
myLinkedList.unshift([0, 'cero'])
myLinkedList.push([3, 'tres'])
myLinkedList.push([4, 'cuatro'])
myLinkedList.unshift([-1, 'negativo uno'])
myLinkedList.unshift([-2, 'negativo dos'])
myLinkedList.push([5, 'cinco'])
myLinkedList.unshift([-3, 'negativo tres'])
myLinkedList.unshift([-4, 'negativo cuatro'])
myLinkedList.unshift([-5, 'negativo cinco'])

console.log('\n Linked List Testing: -5 to 5')
myLinkedList.printList()

console.log('\n My Linked List:')
console.log(myLinkedList)