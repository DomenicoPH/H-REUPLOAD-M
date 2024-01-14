/* ---------------------------------------------- */

/* Binary Search Tree | Árbol Binario de Búsqueda */

/* ---------------------------------------------- */

// Binary Search Tree (función constructora)
function BinarySearchTree(value){
    this.value = value;
    this.left = null;
    this.right = null;
};

// Métodos

// Size
BinarySearchTree.prototype.size = function(){
    if(!this.left && !this.right) return 1;
    if(!this.left) return 1 + this.right.size()
    if(!this.right) return 1 + this.left.size()
    return 1 + this.left.size() + this.right.size()
};

// Insert
BinarySearchTree.prototype.insert = function(value){
    if(value < this.value){
        if(!this.left){
            let newTree = new BinarySearchTree(value)
            this.left = newTree
        } else {
            this.left.insert(value)
        }
    } else if (value > this.value){
        if(!this.right){
            let newTree = new BinarySearchTree(value)
            this.right = newTree
        } else {
            this.right.insert(value)
        }
    }
};

// Contains
BinarySearchTree.prototype.contains = function(value){
    if(value === this.value) return true;
    if(value < this.value){
        if(!this.left) return false
        return this.left.contains(value)
    }
    if(value > this.value){
        if(!this.right) return false
        return this.right.contains(value)
    }
};

// Depth First For Each
BinarySearchTree.prototype.depthFirstForEach = function(cb,recorrido){
    if(recorrido === 'in-order' || !recorrido){
        this.left && this.left.depthFirstForEach(cb,recorrido)
        cb(this.value)
        this.right && this.right.depthFirstForEach(cb,recorrido)
    } else if (recorrido === 'post-order'){
        this.left && this.left.depthFirstForEach(cb,recorrido)
        this.right && this.right.depthFirstForEach(cb,recorrido)
        cb(this.value)
    } else if (recorrido === 'pre-order'){
        cb(this.value)
        this.left && this.left.depthFirstForEach(cb,recorrido)
        this.right && this.right.depthFirstForEach(cb,recorrido)
    }
};

// Breadth First For Each
BinarySearchTree.prototype.breadthFirstForEach = function(cb,arr){
    if(!arr){
        var arr = []
    }
    cb(this.value)
    this.left && arr.push(this.left)
    this.right && arr.push(this.right)
    arr.length && arr.shift().breadthFirstForEach(cb,arr)
};

//------------------------------------------------Instancia del árbol:

const tree = new BinarySearchTree(100)
console.log(tree.size())

tree.insert(50)
tree.insert(60)
tree.insert(40)
tree.insert(70)
tree.insert(30)
tree.insert(80)
tree.insert(20)
tree.insert(90)
tree.insert(10)

console.log(tree.size())

console.log(tree.contains(10))
console.log(tree.contains(100))
console.log(tree.contains(500))
console.log(tree.contains(150))

// Métodos de búsqueda: Breadth First For Each
let bffeResult = []
tree.breadthFirstForEach(function(val){bffeResult.push(val)})
console.log(bffeResult)

// Métodos de búsqueda: Depth First For Each
let inOrder = []
tree.depthFirstForEach(function(val){inOrder.push(val)}, 'in-order')
console.log(inOrder)

let postOrder = []
tree.depthFirstForEach(function(val){postOrder.push(val)},'post-order')
console.log(postOrder)

let preOrder = []
tree.depthFirstForEach(function(val){preOrder.push(val)}, 'pre-order')
console.log(preOrder)