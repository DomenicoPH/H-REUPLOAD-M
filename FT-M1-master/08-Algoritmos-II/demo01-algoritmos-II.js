/* Algoritmos II */

// Quick Sort & Merge Sort:

/*  Quick Sort
    ----------
    QuickSort es un algoritmo de ordenamiento eficiente basado en la estrategia de divide y vencerás. 
    La idea central es seleccionar un elemento del arreglo como pivote y particionar los demás elementos 
    en dos subarreglos según si son menores o mayores que el pivote. Luego, el algoritmo se aplica 
    recursivamente a los subarreglos. */

// implementación:

//A ------------------------------------------------------------------------------ (A)
function quickSortA(arr){
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
    return quickSortA(left).concat(pivot,quickSortA(right))
}

let arrTestA1 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(arrTestA1)
/*ordenado*/console.log(quickSortA(arrTestA1))

let arrTestA2 = [100, 98, 45, 36, 12, 1, 21, 50]
console.log(arrTestA2)
/*ordenado*/console.log(quickSortA(arrTestA2))

//B ------------------------------------------------------------------------------ (B) (implementación alternativa)
function quickSortB(arr, start, end){
    if(start === undefined){
        start = 0;
        end = arr.length - 1
    } else if(start >= end){
        return arr
    }
    var reStart = start
    var reEnd = end
    var pivot = arr[Math.floor(Math.random() * (end - start + 1) + start)]
    while(start < end){
        while(arr[start] <= pivot) start++;
        while(arr[end] > pivot) end--;
        if(start < end){
            var temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
        }
    }
    quickSortB(arr, reStart, start - 1)
    quickSortB(arr, start, reEnd)
}

let arrTestB1 = [9, 8, 7, 6, 5, 4, 3, 2, 1]
quickSortB(arrTestB1)
console.log(arrTestB1)
let arrTestB2 = [100, 98, 45, 36, 12, 1, 21, 50]
quickSortB(arrTestB2)
console.log(arrTestB2)

/*  Merge Sort
    ----------
    Merge Sort es un algoritmo de ordenamiento que sigue el paradigma de divide y vencerás. 
    Divide el arreglo en dos mitades, ordena cada mitad de forma recursiva y luego combina 
    (fusiona) las dos mitades ordenadas para obtener el arreglo final ordenado. */

// implementación:

/* función auxiliar (merge):
    1- Recibe dos arreglos como parámetros.
    2- Trabaja con dos punteros
    3- Guarda los elementos ordenados en un nuevo arreglo.
    4- Entra en el ciclo cuando los punteros están dentro del arreglo.
    5- Compara y pushea al arreglo de ordenados.
    6- Incrementar punteros (i,j)
*/

function merge(arr1,arr2){      
   let i = 0;
   let j = 0;
   let ordered = []
   while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
        ordered.push(arr1[i])
        i++
    } else {
        ordered.push(arr2[j])
        j++
    }
   }
   return ordered.concat(arr1.slice(i),arr2.slice(j))
};

function mergeSort(arr){
    if(arr.length === 1) return arr
    let half = Math.floor(arr.length / 2)
    let left = arr.slice(0,half)
    let right = arr.slice(half)
    return merge(mergeSort(left), mergeSort(right))
};

let mergeUnordered = [10, 6, 8, 9, 1, 3, 5, 2, 4, 7]
let mergeOrdered = mergeSort(mergeUnordered)
console.log(mergeOrdered)