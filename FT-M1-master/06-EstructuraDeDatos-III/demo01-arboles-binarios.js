// Estructuras de datos III

/*    -- Árboles binarios --
      - Implementar una clase que sea ÁRBOL y NODO al mismo tiempo.
      - VALUE = valor numérico
    
      * value => valor numérico (en este caso trabajaremos con valores numéricos)
      * left  => apuntador a un nodo que puede ubicarse a la izquierda
      * right => apuntador a un nodo que puede ubicarse a la derecha

    Recorridos:

    ► Breadth First Search:
    -----------------------
        Explora los nodos más cercanos an nodo raíz y luego se expande a nodos
        cada vez más lejanos en niveles sucesivos.

    ► Depth First Search Inorder:
    -----------------------------
        Explora los nodos del subárbol izquierdo, luego el nodo actual y finalmente
        los nodos del subárbol derecho.

    ► Depth First Search Preorder:
    ------------------------------
        Explora el nodo actual, luego los nodos del subárbol izquierdo y finalmente
        los nodos del subárbol derecho

    ► Depth First Search Postorder:
    -------------------------------
        Explora los nodos del subárbol izquierdo, luego los nodos del subárbol 
        derecho y finalmente el nodo actual.

*/

// ---------------------------------------------------------------------------------------------------------------------------------->>>

function BinarySearchTree(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function(value){

    let newBST = new BinarySearchTree(value)    // nuevo (Binary-Search-Tree) -> equivale a un nuevo 'nodo'
    if(value < this.value){                     // Si 'value' es menor que this.value ...
        // (<) menor: hacia la izquierda
        if(this.left){                          // Si this.left apunta a algo
            // Hay un nodo a la izq.
            this.left.insert(value)             // Si hay un nodo en la lista, llama recursivamente al método 'insert' para el siguiente nivel.
        } else {                                // Si this.left no apunta a nada (null)
            // No hay un nodo a la izq
            this.left = newBST                  // Si no hay un nodo en la lista se inserta en nuevo nodo (newBST)
        }
    } else {                                    // Si value es mayor que this.value...
        // (>) mayor: hacia la derecha
        if(this.right){                         // Si this.right apunta a algo
            // Hay un nodo a la der.
            this.right.insert(value)            // Si hay un nodo en la lista, llama recursivamente al método 'insert' para el siguiente nivel.
        } else {                                // Si this.right no apunta a nada (null)
            // No hay un nodo a la izq
            this.right = newBST                 // Si no hay un nodo en la lista se inserta en nuevo nodo (newBST)
        }
    }
};

BinarySearchTree.prototype.saludar = function(){
    console.log('Hola')
};

// IN-ORDER => Izquierda -> Nodo Actual -> Derecha
BinarySearchTree.prototype.inOrderDepthFirstForEach = function(cb){
    this.left.inOrderDepthFirstForEach(cb);
    cb(this.value);
    this.right.inOrderDepthFirstForEach(cb);
};

// PRE-ORDER => Nodo Actual -> Izquierda -> Derecha
BinarySearchTree.prototype.preOrderDepthFirstForEach = function(cb){
    cb(this.value);
    this.left.preOrderDepthFirstForEach(cb)
    this.right.preOrderDepthFirstForEach(cb)
}

// POST-ORDER => Izquierda -> Derecha -> Nodo Actual
BinarySearchTree.prototype.postOrderDepthFirstForEach = function(cb){
    this.left.postOrderDepthFirstForEach(cb)
    this.right.postOrderDepthFirstForEach(cb)
    cb(this.value)
}

var miArbol = new BinarySearchTree(10)
console.log(miArbol)
