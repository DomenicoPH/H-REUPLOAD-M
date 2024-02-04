// Repaso Estructuras de datos:

/* -- Array -- -------------------------------------------------------- -- Array -- */

let myArray = []
console.log(myArray)

    myArray.push(8,7,3,4,5,6)
    myArray.push(myArray.shift())
    myArray.push(myArray.shift())
    myArray.unshift(2)
    myArray.unshift(1)
    myArray.splice(2,0,9)
    myArray.push(10,11)
    myArray.pop()

    // bubble-Sort:
    function bubbleSort(arr){
        for(let i=0; i < arr.length-1; i++){
            for(let j=0; j < arr.length-1; j++){
                if(arr[j] > arr[j+1]){
                    let aux = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = aux
                }
            }
        }
        return arr
    }

console.log(myArray.length)

console.log(myArray)
bubbleSort(myArray)
console.log(myArray)

//--------------------------------------------------------

let extra = new Array()
console.log(extra)
extra.push(50,60,70,80,90,100)
extra.unshift(extra.pop())
extra.unshift(extra.pop())
extra.unshift(extra.pop())
extra.pop()
extra.unshift('a')
extra.shift()
extra.unshift(40,30,20,10,70)

let newExtra = extra.map((num) => num / 10)

    // insertion sort
    function insertionSort(arr){
        for(let i=1; i < arr.length; i++){
            for(let j=i; j > 0; j--){
                if(arr[j] < arr[j-1]){
                    [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
                }
            }
        }
        return arr
    }

console.log(extra)
insertionSort(extra)
console.log(extra)

console.log(newExtra)
insertionSort(newExtra)
console.log(newExtra)

/* -- Set -- -------------------------------------------------------- -- Set -- */

let mySet = new Set();
//add
mySet.add('A')
mySet.add('B')
mySet.add('J')
mySet.add('C')
//delete
mySet.delete('J')
//has
console.log(mySet.has('A'))
console.log(mySet.has('J'))

mySet.clear()

mySet.add('A')
mySet.add('A')
mySet.add('B')
mySet.add('C')
mySet.add('D')
mySet.add('D')
mySet.add('D')
mySet.add('E')

for(let key of mySet.keys()){
    console.log(key)
}

console.log(mySet.size)

mySet.clear()

console.log(mySet)

/* -- Stack -- -------------------------------------------------------- -- Stack -- */

function Stack(){
    this.arr = []
}

Stack.prototype.add = function(value){
    this.arr.push(value)
}
Stack.prototype.remove = function(){
    this.arr.pop()
}
Stack.prototype.size = function(){
    return this.arr.length
}

let myStack = new Stack()
    console.log(myStack)

myStack.add(5)
    console.log(myStack)
myStack.add(6)
    console.log(myStack)
myStack.add(7)
    console.log(myStack)

myStack.remove()
    console.log(myStack)
myStack.remove()
    console.log(myStack)
myStack.remove()
    console.log(myStack)

/* -- Queue -- -------------------------------------------------------- -- Queue -- */

function Queue(){
    this.arr = []
}
Queue.prototype.enqueue = function(value){
    this.arr.push(value)
}
Queue.prototype.dequeue = function(){
    return this.arr.shift()
}
Queue.prototype.size = function(){
    return this.arr.length
}

let ingresados = []

let myQueue = new Queue()
    console.log(myQueue)
myQueue.enqueue(1)
    console.log(myQueue)
myQueue.enqueue(2)
    console.log(myQueue)
myQueue.enqueue(3)
    console.log(myQueue)
myQueue.enqueue(4)
    console.log(myQueue)
myQueue.enqueue(5)
    console.log(myQueue)

myQueue.enqueue(6)    
ingresados.push(myQueue.dequeue())
    console.log(myQueue)
    console.log(ingresados)
myQueue.enqueue(7)    
ingresados.push(myQueue.dequeue())
    console.log(myQueue)
    console.log(ingresados)
myQueue.enqueue(8)    
ingresados.push(myQueue.dequeue())
    console.log(myQueue)
    console.log(ingresados)
myQueue.enqueue(9)    
ingresados.push(myQueue.dequeue())
    console.log(myQueue)
    console.log(ingresados)
myQueue.enqueue(10)    
ingresados.push(myQueue.dequeue())
    console.log(myQueue)
    console.log(ingresados)

console.log(myQueue.arr)
    console.log(myQueue.size())
console.log(ingresados)
    console.log(ingresados.length)
    
/* -- Linked List -- -------------------------------------------------------- -- Linked List -- */
function LinkedList(){
    this.head = null
    this._length = 0
}
function Node(value){
    this.value = value
    this.next = null
}
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
}
LinkedList.prototype.remove = function(){
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
}
LinkedList.prototype.search = function(value){
    let current = this.head
    if(typeof value !== 'function'){
        while(current){
            if(current.value === value){
                return current.value
            }
            current = current.next
        }
    } else {
        while(current){
            if(value(current.value)){
                return current.value
            }
            current = current.next
        }
    }
    return null
}
LinkedList.prototype.size = function(){
    return this._length
}

let myLinkedList = new LinkedList()
console.log(myLinkedList)

myLinkedList.add(1)
myLinkedList.add(2)

console.log(myLinkedList)

myLinkedList.remove()
myLinkedList.add(10)
myLinkedList.add(100)

console.log(myLinkedList)

console.log(myLinkedList.search(1))
console.log(myLinkedList.search(2))
console.log(myLinkedList.search(10))
console.log(myLinkedList.search(25))
console.log(myLinkedList.search(100))
console.log(myLinkedList.search(500))

console.log(myLinkedList.size())

/* -- Hash Table -- -------------------------------------------------------- -- Hash Table -- */
function HashTable(){
    this.buckets = []
    this.numBuckets = 35
}
HashTable.prototype.hash = function(key){
    let hash = 0
    for(let i=0; i < key.length; i++){
        hash += key.charCodeAt(i)
    }
    return hash % this.numBuckets
}
HashTable.prototype.set = function(key,value){
    if(typeof key !== 'string') throw new TypeError('Keys must be strings')
    let position = this.hash(key)
    if(!this.buckets[position]) this.buckets[position] = {}
    this.buckets[position][key] = value
}
HashTable.prototype.get = function(key){
    var position = this.hash(key)
    if(this.buckets[position] && this.buckets[position][key]){
        return this.buckets[position][key]
    }
    return false
}
HashTable.prototype.hasKey = function(key){
    var position = this.hash(key)
    if(this.buckets[position] && this.buckets[position][key]){
        return true
    }
    return false
}

let miTabla = new HashTable()
console.log(miTabla)

miTabla.set('000','white')
miTabla.set('001','black')
miTabla.set('002','red')
miTabla.set('003','green')
miTabla.set('004','blue')

console.log(miTabla.get('003'))
console.log(miTabla.get('000'))
console.log(miTabla.get('001'))
console.log(miTabla.get('008'))
console.log(miTabla.get('005'))

console.log(miTabla.hasKey('001'))
console.log(miTabla.hasKey('003'))
console.log(miTabla.hasKey('008'))
console.log(miTabla.hasKey('005'))

console.log(miTabla)

/* -- Binary Search Tree -- -------------------------------------------------------- -- Binary Search Tree -- */
function BinarySearchTree(value){
    this.value = value
    this.left = null
    this.right = null
}
BinarySearchTree.prototype.size = function(){
    if(!this.left && !this.right) return 1
    if(!this.left) return 1 + this.right.size()
    if(!this.right) return 1 + this.left.size()
    return 1 + this.left.size() + this.right.size()
}
BinarySearchTree.prototype.insert = function(value){
    if(value < this.value){
        if(!this.left){
            let newTree = new BinarySearchTree(value)
            this.left = newTree
        } else {
            this.left.insert(value)
        }
    } else {
        if(!this.right){
            let newTree = new BinarySearchTree(value)
            this.right = newTree
        } else {
            this.right.insert(value)
        }
    }
}
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
    } else {
        throw new Error('Recorrido no válido')
    }
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb,arr){
    if(!arr) var arr = []
    cb(this.value)
    this.left && arr.push(this.left)
    this.right && arr.push(this.right)
    arr.length && arr.shift().breadthFirstForEach(cb,arr)
}
BinarySearchTree.prototype.contains = function(value){
    if(value === this.value) return true
    if(value < this.value){
        if(!this.left) return false
        return this.left.contains(value)
    } else {
        if(!this.right) return false
        return this.right.contains(value)
    }
}

let myTree = new BinarySearchTree(0)
console.log(myTree.size())

myTree.insert(1)
myTree.insert(10)
myTree.insert(2)
myTree.insert(100)
myTree.insert(3)
myTree.insert(1000)
myTree.insert(4)

console.log(myTree.size())
console.log(myTree)

//breadthFirstForEach
function printValue(value){
    console.log(value)
}
myTree.breadthFirstForEach(printValue)

//DepthFirstForEach
console.log('In-Order: ')
myTree.depthFirstForEach(printValue, 'in-order')
console.log('Pre-Order: ')
myTree.depthFirstForEach(printValue, 'pre-order')
console.log('Post-Order: ')
myTree.depthFirstForEach(printValue, 'post-order')
