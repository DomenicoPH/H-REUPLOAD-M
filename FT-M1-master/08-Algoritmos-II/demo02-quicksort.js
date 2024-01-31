// Demo Quick Sort --->
function quicksortDemo(arr){
    if(arr.length <= 1) return arr;         // IF ► Si arr.length es menor o igual a 1 (arr=[] o arr=[x]) retornarlo sin más.
    let pivot = arr[0]                      // arr[0] --> utiliza el primer elemento del array como pivote
    let left = []                           // [ ] crea un array para los MENORES (a la izquierda)
    let right = []                          // [ ] crea un array para los MAYORES (a la derecha)
    for(let i=1; i < arr.length; i++){      // ► Ciclo for: recorre el array desde el segundo elemento (el primero es el pívote) hasta el último
        if(arr[i] <= pivot){                // ► Concicional: Si el elemento es menor o igual que el pivote:
            left.push(arr[i])               // ►► a la izquierda...
        } else {                            // ► Condicional: Si el elemento es mayor que el pivote:
            right.push(arr[i])              // ►► a la derecha...
        }
    }
    return quicksortDemo(left).concat(pivot, quicksortDemo(right))      // Recursividad: Repite el proceso con el array izquierdo, con el derecho y retorna el resultado concatenado.
};

let qsDesordenado = [10, 9, 8, 7, 6, 4, 1, 2, 3, 5]
quicksortDemo(qsDesordenado)
console.log(qsDesordenado)
let qsOrdenado = quicksortDemo(qsDesordenado)
console.log(qsOrdenado)

// Repeat
//----------------------------------------------------------------------------------------------------------------
function quickSort(arr){                        // con el pivote en arr[0] (primer índice)
    if(arr.length <= 1) return arr;
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] <= pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
};
let arrayDesordenado = [5, 4, 3, 2, 1]
console.log(arrayDesordenado)
let arrayOrdenado = quickSort(arrayDesordenado)
console.log(arrayOrdenado)
//----------------------------------------------------------------------------------------------------------------
function quickSortAlt(arr){                     // con el pivote en arr[arr.length - 1] (último índice)
    if(arr.length <= 1) return arr
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i=0; i < arr.length - 1; i++){
        if(arr[i] <= pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSortAlt(left).concat(pivot, quickSortAlt(right))
}
console.log(quickSortAlt([5,4,3,2,1]))
//----------------------------------------------------------------------------------------------------------------
function quickShort(arr){                       // versión comprimida
    if(arr.length <= 1) return arr
    let pivot = arr[0], left = [], right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] <= pivot) left.push(arr[i])
        if(arr[i] > pivot) right.push(arr[i])
    }
    return quickShort(left).concat(pivot,quickShort(right))
}
console.log(quickShort([5,4,3,2,1]))
//----------------------------------------------------------------------------------------------------------------
function qs1(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] <= pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return qs1(left).concat(pivot, qs1(right))
}
console.log(qs1([9, 7, 6, 5, 4, 8, 3, 2, 1]))

function qs2(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return qs2(left).concat(pivot, qs2(right))
}
console.log(qs2([5,4,3,2,1]))

function qs3(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return qs3(left).concat(pivot, qs3(right))
}
console.log(qs3([5,4,3,2,1]))

function qs4(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return qs4(left).concat(pivot, qs4(right))
}
console.log(qs4([5,4,3,2,1]))

function qs5(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] <= pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return qs5(left).concat(pivot,qs5(right))
}
console.log(qs5([5,4,3,2,1]))

function qs6(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return qs6(left).concat(pivot, qs6(right))
}
console.log(qs6([5,4,3,2,1]))

function qs7(arr){
    if(arr.length <= 1) return arr
    let piv = arr[0]
    let left = []
    let right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] < piv){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return qs7(left).concat(piv,qs7(right))
}
console.log(qs7([5,4,3,2,1]))

function qs8(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return qs8(left).concat(pivot,qs8(right))
}
console.log(qs8([5,4,3,2,1]))