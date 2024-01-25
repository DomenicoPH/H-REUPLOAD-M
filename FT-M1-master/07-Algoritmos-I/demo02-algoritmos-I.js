// Algoritmos

/* Factorear -------------------------------------------------------------------------------------------------------------------------------> */
function factorear(num){
    let arr = [1];
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
console.log(factorear(7)) // primo //
console.log(factorear(13)) // primo //
console.log(factorear(26))
console.log(factorear(180))
console.log(factorear(1600))

// --> factorear --> Big-O: O(log n)

// factoring //
function factoring(n){
    let arr = [1]
    let div = 2
    while(n > 1){
        while(n % div === 0){
            arr.push(div)
            n /= div
        }
        div++
    }
    return arr
}
console.log(factoring(180))
console.log(factoring(360))
console.log(factoring(400))

// factoreando //
function factoreando(num){
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
console.log(factoreando(180))
console.log(factoreando(360))
console.log(factoreando(400))

// nuevoFactorear //
function nuevoFactorear(num){
    let factores = [1]
    let divisor = 2
    while(num > 1){
        if(num % divisor === 0){
            factores.push(divisor)
            num /= divisor
        } else {
            divisor++
        }
    }
    return factores
}
console.log(nuevoFactorear(180))
console.log(nuevoFactorear(360))
console.log(nuevoFactorear(400))

// Recordando Factorear //
function factoreaEsto(num){
    let arr = [1]   // array de factores inicializado con un 1
    let divisor = 2     // divisor iniciado en 2
    while(num > 1){     // mientras 'num' sea mayor que 1 =>
        while(num % divisor === 0){     // mientras 'num' / 'divisor' den 0 de resto (división exacta)
            arr.push(divisor)   // división exacta => push del divisor al arreglo de factores => array de factores crece
            num /= divisor      // num / divisor => el valor de num se reduce
        }
        divisor++   // divisor + 1
    }
    return arr      // retorna el array de factores
}
console.log(factoreaEsto(180))


/* Bubble Sort -------------------------------------------------------------------------------------------------------------------------------> */
function bubbleSort(arr){
    let switcher = true
    while(switcher){
        switcher = false
        for(let i=0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                let aux = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = aux
                switcher = true
            }
        }
    }
    return arr
}
let bsTestArr1 = [4, 1, 6, 3, 8, 5, 2, 7]
let bsTestArr2 = [9, 7, 5, 3, 1]
console.log(bubbleSort(bsTestArr1))
console.log(bubbleSort(bsTestArr2))
console.log(bubbleSort([8, 6, 4, 2, 0]))
console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))

// --> bubbleSort --> Big-O: O(n^2)

function bubbleSortRepeat(arr){
    let interruptor = true
    while(interruptor){
        interruptor = false
        for(let i=0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                let aux = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = aux
                interruptor = true
            }
        }
    }
    return arr
}
console.log(bubbleSortRepeat([5,4,3,2,1]))
console.log(bubbleSortRepeat([100, 80, 40, 20, 1]))

function bubbleSortNoSwitcher(arr){
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
    // --> bubbleSort --> Big-O: O(n^2)
} 
console.log(bubbleSortNoSwitcher([6,4,3,5,2,1]))
console.log(bubbleSortRepeat([50, 40, 30, 20, 10]))

function myPersonalBubbleSorter(arr){
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
console.log(myPersonalBubbleSorter([10, 6, 3, 2, 1, 8, 0, 5, 4, 9, 7]))
console.log(myPersonalBubbleSorter([5, 4, 3, 2, 1, 0]))


/* Insertion Sort -------------------------------------------------------------------------------------------------------------------------------> */
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
const unorderedArr1 = [3,5,4,6,2,1]
console.log(insertionSort(unorderedArr1))

function insertionSortAux(arr){
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
console.log(insertionSortAux([5, 3, 4, 2, 1]))
console.log(insertionSortAux(['b','c','a']))

/* Selection Sort -------------------------------------------------------------------------------------------------------------------------------> */




// *** Memo ***

// 1. Factorear:
function factorearMemo(num){
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
console.log(factorearMemo(180))
console.log(factorearMemo(360))

// 2. Bubble Sort (con interruptor)
function bubbleSortConSwitcherMemo(arr){
    let switcher = true
    while(switcher){
        switcher = false
        for(let i=0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                let aux = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = aux
                switcher = true
            }
        }
    }
    return arr
};
console.log(bubbleSortConSwitcherMemo([5, 4, 3, 2, 1]))
console.log(bubbleSortConSwitcherMemo(['e', 'b', 'd', 'c', 'a']))

// 2. Bubble Sort (sin interruptor)
function bubbleSortSinSwitcherMemo(arr){
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
console.log(bubbleSortSinSwitcherMemo([5,4,3,2,1]))
console.log(bubbleSortSinSwitcherMemo([10, 9, 7, 5, 2, 1]))

// 3. Insertion Sort
function inserionSortalg(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
}
console.log(inserionSortalg([5,4,3,2,1]))

// 4. Selection Sort
function selectionSort(arr){
    for(let i=0; i < arr.length-1; i++){
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
}
console.log(selectionSort([5,4,3,2,1]))