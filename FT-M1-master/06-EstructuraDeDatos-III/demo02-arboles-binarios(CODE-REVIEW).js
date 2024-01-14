function BinarySearchTree(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.size = function(){
    // ? Caso Base: Cuando llega a un nodo hoja (nodo vacío: apunta a 'null' tanto hacia derecha como izquierda)
    if(!this.left && !this.right) return 1
    // ? Cuando el árbol tiene un solo hijo
    if(!this.left) return 1 + this.right.size()
    if(!this.right) return 1 + this.left.size()
    // ? Cuando el árbol tiene dos hijos
    return 1 + this.left.size() + this.right.size()
};

BinarySearchTree.prototype.insert = function(value){
    
    // ? Si 'value' es menor que el valor que se está evaluando (this.value) deberá ir a la izquierda, si es mayor a la derecha.

    if(value < this.value){                                         // Si es menor... Pregunta: ----------[ IZQUIERDA - MENOR ]----------
        if(!this.left){                                             //  Si this.left apunta a 'null' (nodo vacío)
            let newTree = new BinarySearchTree(value)               //       Crea una nueva instancia del árbol y asignale el valor a insertar
            this.left = newTree                                     //       Que this.left apunte ahora a la nueva instancia creada (nuevo nodo insertado)
        } else {                                                    //  Si this.left tiene algun valor (no está vacío)
            this.left.insert(value)                                 //       Recursividad: ejecutamos .insert(value) sobre el nodo que contiene algún valor
        }
    } else {                                                        // Si es mayor... Pregunta: ----------[ DERECHA - MAYOR ]----------
        if(!this.right){                                            //  Si this.right apunta a 'null' (nodo vacío)
            let newTree = new BinarySearchTree(value)               //       Crea una nueva instancia del árbol y asignale el valor a insertar
            this.right = newTree                                    //       Que this.right apunte ahora a la nueva instancia creada (nuevo nodo insertado)
        } else {                                                    //  Si this.right tiene algun valor (no está vacío)
            this.right.insert(value)                                //       Recursividad: ejecutamos .insert(value) sobre el nodo que contiene algún valor
        }
    }
};

BinarySearchTree.prototype.depthFirstForEach = function(cb,recorrido){

    // ? Recibe un callback y un tipo de recorrido:

    if(recorrido === 'in-order' || !recorrido){                     // Si el recorrido es 'in-order' o no se especifica el recorrido...
        this.left && this.left.depthFirstForEach(cb,recorrido)      //   Verificar si hay algo a la ( IZQ ) y repetir recursivamente
        cb(this.value)                                              //   Callback con el valor actual como parámetro
        this.right && this.right.depthFirstForEach(cb,recorrido)    //   Verificar si hay algo a la ( DER ) y repetir recursivamente

    } else if(recorrido === 'post-order'){                          // Si el recorrido es 'post-order'...
        this.left && this.left.depthFirstForEach(cb,recorrido)      //   Verificar si hay algo a la ( IZQ ) y repetir recursivamente
        this.right && this.right.depthFirstForEach(cb,recorrido)    //   Verificar si hay algo a la ( DER ) y repetir recursivamente
        cb(this.value)                                              //   Callback con el valor actual como parámetro

    } else if(recorrido === 'pre-order'){                           // Si el recorrido es 'pre-order'...
        cb(this.value)                                              //   Callback con el valor actual como parámetro
        this.left && this.left.depthFirstForEach(cb,recorrido)      //   Verificar si hay algo a la ( IZQ ) y repetir recursivamente
        this.right && this.right.depthFirstForEach(cb,recorrido)    //   Verificar si hay algo a la ( DER ) y repetir recursivamente

    } else {
        throw new Error('Recorrido no válido');
    }
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr){
    if(!arr){                                                       // Si no hay un array...
        var arr = []                                                // ...crea uno vacío
    }
    cb(this.value)                                                  // Callback con el valor actual como parámetro
    this.left && arr.push(this.left)                                // Verificar si hay algo a la IZQUIERDA y si hay, hacer push en 'this.left'
    this.right && arr.push(this.right)                              // Verificar si hay algo a la DERECHA y si hay, hacer push en 'this.right'
    arr.length && arr.shift().breadthFirstForEach(cb,arr)           // 
};

BinarySearchTree.prototype.contains = function(value){
    
    // ? Caso base
    if(value === this.value) return true                            // Si 'value' (el valor buscado) es igual al valor actual, retorna TRUE
    if(value < this.value){                                         // Si 'value' (el valor buscado) es menor al valor actual, apunta a la IZQUIERDA
        if(!this.left) return false                                 //   Si el nodo izquierdo está vacío, retorna FALSE
        return this.left.contains(value)                            //   Si no está vacío -> Recursividad: Se repite el proceso en el siguiente sub-árbol
    } else {                                                        // Si 'value' (el valor buscado) es mayor al valor actual, apunta a la DERECHA
        if(!this.right) return false;                               //   Si el nodo derecho está vacío, retorna FALSE
        return this.right.contains(value)                           //   Si no está vacío -> Recursividad: Se repite el proceso en el siguiente sub-árbol
    }
}

// Binary Search Tree : Instancia
const miArbolBinario = new BinarySearchTree(100)

// Función CallBack
function cb(val){
    let testArr = []
    testArr.push(val)
    console.log(testArr)
}

//.......................................................
console.log(miArbolBinario.size())
miArbolBinario.insert(50)
console.log(miArbolBinario.size())
miArbolBinario.insert(300)
console.log(miArbolBinario.size())
miArbolBinario.insert(20)
console.log(miArbolBinario.size())

miArbolBinario.depthFirstForEach(cb,'in-order')
miArbolBinario.depthFirstForEach(cb,'pre-order')
miArbolBinario.depthFirstForEach(cb,'post-order')

console.log(miArbolBinario)
