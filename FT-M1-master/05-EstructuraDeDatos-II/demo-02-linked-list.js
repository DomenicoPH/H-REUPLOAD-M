// Linked List | Listas enlazadas

/*  Una lista enlazada consta de nodos interconectados.
    Estos nodos contienen un valor y una referencia al 
    siguiente nodo.  */

// Funcion constructora:

// FC --> Linked List
function LinkedList(){
    this.head = null
}

// FC --> Node
function Node(value){
    this.value = value;
    this.next = null;
}

// ----> Métodos
LinkedList.prototype.add = function(val){
    var node = new Node(val)
    var current = this.head
    if(!current){
        this.head = node
        return val
    }
    while(current.next){
        current = current.next
    }
    current.next = node
    return val
}

// INSTANCIA DE LISTA
let miLista = new LinkedList()
console.log(miLista)
miLista.add(1)
miLista.add(2)
miLista.add(3)
console.log(miLista)