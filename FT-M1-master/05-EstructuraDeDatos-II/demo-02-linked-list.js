// Linked List | Listas enlazadas

/*  Una lista enlazada consta de nodos interconectados.
    Estos nodos contienen un valor y una referencia al 
    siguiente nodo.  */

// Funcion constructora:

// FC --> Linked List
function LinkedList(){
    this.head = null
    this._length = 0
}

// FC --> Node
function Node(value){
    this.value = value;
    this.next = null;
}

// --- add ---
LinkedList.prototype.add = function(value){

    let node = new Node(value)
    let current = this.head

    if(!current){
        this.head = node
        this._length++
        return value
    }

    while(current.next){
        current = current.next
    }

    current.next = node
    this._length++
    return value

};

// --- remove ---
LinkedList.prototype.removeLast = function(){

    if(!this.head){
        return null
    }

    let current = this.head
    let previous = null

    while(current.next){
        previous = current
        current = current.next
    }

    if(!previous){
        this.head = null
    } else {
        previous.next = null
    }

    this._length--
    return current.value

};

// --- search ---
LinkedList.prototype.search = function(value){
    
    if(typeof value !== 'string'){
        throw new TypeError('El parámetro de búsqueda no es válido')
    }

    let current = this.head

    while(current){
        if(typeof current.value === 'string' && current.value.includes(value)){
            return true;
        }
        current = current.next
    }

    return false;

}

// --- size ---
LinkedList.prototype.size = function(){

    return this._length

};

// --- print ---
LinkedList.prototype.print = function(){
    
    let current = this.head
    const listElements = []

    while(current){
        listElements.push(current.value)
        current = current.next
    }

    return listElements.join(' -> \n')

}

// INSTANCIA DE LISTA

// Primera Lista:
let miLista = new LinkedList()
console.log(miLista)
console.log(miLista.size());

miLista.add(1)
miLista.add(2)
miLista.add(3)
miLista.add(4)
miLista.add(5)
miLista.removeLast()
miLista.removeLast()
miLista.removeLast()
miLista.removeLast()
miLista.removeLast()

miLista.add(['ID: 001 ', 'Domenico Pagano', 998765431])
miLista.add(['ID: 002 ', 'Sam Cucaracha', 976563543])
miLista.add(['ID: 003 ', 'Pedro Mosca', 954352346])
miLista.removeLast()
miLista.removeLast()
miLista.removeLast()

miLista.add('Domenico Pagano')
miLista.add('Graciela Valderrama')
miLista.add('Gia Perrito')

console.log(miLista.search('hola'))
console.log(miLista.search('Perrito'))
console.log(miLista.search('Mosca'))
console.log(miLista.search('derrama'))
console.log(miLista.search('Domin'))

/*
miLista.add({id: '001', nombre: 'Domenico Pagano', tlf: 998765431})
miLista.add({id: '002', nombre: 'Sam Cucaracha', tlf: 976563543})
miLista.add({id: '003', nombre: 'Pedro Mosca', tlf: 954352346})
*/

console.log(miLista.print())
console.log(miLista.size());
console.log(miLista)

// Segunda Lista:

const libros = new LinkedList()
console.log(libros)

libros.add('| Acid House | Irvine Welsh |')
libros.removeLast()
libros.add('| Trainspotting | Irvine Welsh |')
libros.add('| Skagboys | Irvine Welsh |')
libros.removeLast()
libros.add('| Porno | Irvine Welsh |')
libros.removeLast()
libros.add('| La ley de la calle | Susan E. Hinton |')
libros.removeLast()
libros.add('| Rebeldes | Susan E. Hinton |')
libros.add('| 2001: Una odisea espacial | Arthur C. Clarke |')
libros.add('| Fuentes del paraiso | Arthur C. Clarke |')
libros.removeLast()
libros.add('| Parque Jurásico | Michael Crichton |')
libros.add('| El mundo Perdido | Michael Crichton |')
libros.removeLast()
libros.add('| El padrino | Mario Puzo |')
libros.add('| Dejar el mundo atrás | Rumaan Alam |')
libros.add('| QBVII | León Uris |')

console.log('\n Lista de libros: \n ----------------')
console.log(libros.print())