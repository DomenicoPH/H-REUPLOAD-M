// Algoritmos I -----------------------------------------------------------------------------------------------------------------------------

// 1. factorear
function factorear(num){
    let arr = [1]
    let divisor = 2
    while(num > 1){
        while(num % divisor === 0){
            arr.push(divisor)
            num /= divisor
        }
        divisor++
    }
    return arr
}
console.log(factorear(180))

// 2. bubbleSort
function bubbleSort(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(bubbleSort([5,4,3,2,1]))

// 3. InsertionSort
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
console.log(insertionSort([5,4,3,2,1]))

// 4. SelectionSort
function selectionSort(arr){
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j=i+1; j < arr.length; j++){
            if(arr[j] < arr[min])
            min = j
        }
        let aux = arr[i]
        arr[i] = arr[min]
        arr[min] = aux
    }
    return arr
}
console.log(selectionSort([5,4,3,2,1]))

// 5. QuickSort
function quickSort(arr){
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
    return quickSort(left).concat(pivot,quickSort(right))
}
console.log(quickSort([5,4,3,2,1]))

// 6. MergeSort
function mergeSort(arr){
    if(arr.length === 1) return arr
    let half = Math.floor(arr.length / 2)
    let left = arr.slice(0,half)
    let right = arr.slice(half)
    return merge(mergeSort(left),mergeSort(right))
}
//aux
function merge(arr1,arr2){
let i = 0
let j = 0
let orden = []
while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
        orden.push(arr1[i])
        i++
    } else {
        orden.push(arr2[j])
        j++
    }
}
return orden.concat(arr1.slice(i),arr2.slice(j))
}
console.log(mergeSort([5,4,3,2,1]))

// Algoritmos II -----------------------------------------------------------------------------------------------------------------------------

// factorear
function factorear2(num){
    let factores = [1]
    let divisor = 2
    while(num > 1){
        while(num % divisor === 0){
            factores.push(divisor)
            num /= divisor
        }
        divisor++
    }
    return factores
};
console.log(factorear2(180))

// bubble sort
function bubbleSort2(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
};
console.log(bubbleSort2([5,4,3,2,1]))

// insertion sort
function insertionSort2(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
};
console.log(insertionSort2([5,4,3,2,1]))

// selection sort
function selectionSort2(arr){
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j=i+1; j < arr.length; j++){
            if(arr[j] < arr[min]) min = j
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
};
console.log(selectionSort2([5,4,3,2,1]))

// quick sort
function quickSort2(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] <= pivot) left.push(arr[i])
        if(arr[i] > pivot) right.push(arr[i])
    }
return quickSort2(left).concat(pivot,quickSort2(right))
};
console.log(quickSort2([5,4,3,2,1]))

// merge sort
function merge2(arr1,arr2){
    let i = 0
    let j = 0
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
    return ordered.concat(arr1.slice(i), arr2.slice(j))
};
function mergeSort2(arr){
    if(arr.length === 1) return arr
    let half = Math.floor(arr.length / 2)
    let left = arr.slice(0,half)
    let right = arr.slice(half)
    return merge2(mergeSort2(left),mergeSort2(right))
};
console.log(mergeSort2([5,4,3,2,1]))

// Algoritmos III -----------------------------------------------------------------------------------------------------------------------------

// factorear
function factorear3(num){
    let factores = [1]
    let divisor = 2
    while(num > 1){
        while(num % divisor === 0){
            factores.push(divisor)
            num /= divisor
        }
        divisor++
    }
    return factores
}
console.log(factorear3(180))


// bubble sort
function bubbleSort3(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                let aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
    return arr
}
console.log(bubbleSort3([5,4,3,2,1]))

// insertion sort
function insertionSort3(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                let aux = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = aux
            }
        }
    }
    return arr
}
console.log(insertionSort3([5,4,3,2,1]))

// selection sort
function selectionSort3(arr){
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j=i+1; j < arr.length; j++){
            if(arr[j] < arr[min]) min = j
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}
console.log(selectionSort3([5,4,3,2,1]))

// quick sort
function quickSort3(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] <= pivot) left.push(arr[i])
        if(arr[i] > pivot) right.push(arr[i])
    }
    return quickSort3(left).concat(pivot,quickSort3(right))
}
console.log(quickSort3([5,4,3,2,1]))

// merge sort
function mergeSort3(arr){
    if(arr.length <= 1) return arr
    let half = Math.floor(arr.length / 2)
    let left = arr.slice(0,half)
    let right = arr.slice(half)
    return merge3(mergeSort3(left),mergeSort3(right))
};
function merge3(arr1,arr2){
let i = 0
let j = 0
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
console.log(mergeSort3([5,4,3,2,1]))

// Algoritmos IV -----------------------------------------------------------------------------------------------------------------------------

//quicksort
function quickSort4(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] <= pivot) left.push(arr[i])
        if(arr[i] > pivot) right.push(arr[i])
    }
    return quickSort4(left).concat(pivot,quickSort4(right))
};
console.log(quickSort4([5,4,3,2,1]))

//mergesort
function mergeSort4(arr){
    if(arr.length <= 1) return arr
    let half = Math.floor(arr.length / 2)
    let left = arr.slice(0,half)
    let right = arr.slice(half)
    return merge4(mergeSort4(left),mergeSort4(right))
};
function merge4(arr1,arr2){
    let i = 0
    let j = 0
    let ord = []
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            ord.push(arr1[i])
            i++
        } else {
            ord.push(arr2[j])
            j++
        }
    }
    return ord.concat(arr1.slice(i), arr2.slice(j))
};
console.log(mergeSort4([5,4,3,2,1]))

//bubbleSort
function bubbleSort4(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                let aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
    return arr
};
console.log(bubbleSort4([5,4,3,2,1]))

//insertionSort
function insertionSort4(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
}
console.log(insertionSort4([5,4,3,2,1]))

//selectionSort
function selectionSort4(arr){
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j=i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        let aux = arr[i]
        arr[i] = arr[min]
        arr[min] = aux
    }
    return arr
};
console.log(selectionSort4([5,4,3,2,1]))

//factorear
function factorear4(num){
    let factores = [1]
    let divisor = 2
    while(num > 1){
        while(num % divisor === 0){
            factores.push(divisor)
            num /= divisor
        }
        divisor++
    }
    return factores
}
console.log(factorear4(180))

// Algoritmos V -----------------------------------------------------------------------------------------------------------------------------

//factorear
function factorear5(num){
    let factores = [1]
    let div = 2
    while(num > 1){
        while(num % div === 0){
            factores.push(div)
            num /= div
        }
        div++
    }
    return factores
}
console.log(factorear5(180))

//bubble sort
function bubbleSort5(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(bubbleSort5([5,4,3,2,1]))

//insertion sort
function insertionSort5(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
}
console.log(insertionSort5([5,4,3,2,1]))

//selection sort
function selectionSort5(arr){
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j=i+1; j < arr.length; j++){
            if(arr[j] < arr[min]) min = j
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}
console.log(selectionSort5([5,4,3,2,1]))

//quick sort
function quickSort5(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] <= pivot) left.push(arr[i])
        if(arr[i] > pivot) right.push(arr[i])
    }
    return quickSort5(left).concat(pivot,quickSort5(right))
}
console.log(quickSort5([5,4,3,2,1]))

//merge sort
function mergeSort5(arr){
    if(arr.length <= 1) return arr
    let half = Math.floor(arr.length / 2)
    let left = arr.slice(0,half)
    let right = arr.slice(half)
    return merge5(mergeSort5(left),mergeSort5(right))
}
function merge5(arr1,arr2){
    let i=0
    let j=0
    let ordenados = []
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            ordenados.push(arr1[i])
            i++
        } else {
            ordenados.push(arr2[j])
            j++
        }
    }
    return ordenados.concat(arr1.slice(i),arr2.slice(j))
}
console.log(mergeSort5([5,4,3,2,1]))