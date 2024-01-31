// Factorear
function miFactorear(num){
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
console.log(miFactorear(180))


// Bubble Sort con Switcher
function myBubbleSortS(arr){
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
const testArr1 = [5, 3, 4, 2, 1]
console.log(myBubbleSortS(testArr1))


// Bubble Sort sin Switcher
function myBubbleSort(arr){
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
const testArr2 = [4, 2, 9, 6, 5, 8, 7, 3, 1]
console.log(myBubbleSort(testArr2))


// Insertion Sort
function insertionSort(arr){
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
const arrForIS = [5, 4, 1, 2, 3]
console.log(insertionSort(arrForIS))


// Selection Sort
function selectionSort(arr){
    for(let i=0; i < arr.length - 1; i++){
        let min = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        let aux = arr[i]
        arr[i] = arr[min]
        arr[min] = aux
    }
    return arr;
}
const arrForSS = [10, 6, 1, 9, 2, 8, 5, 7, 3, 4]
console.log(selectionSort(arrForSS))

// Repeat -------------------- // Repeat -------------------- // Repeat -------------------- // Repeat -------------------- // Repeat --------------------

/* Factorear */
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
}
console.log(factorear2(180))

/* bubble sort */
function bubbleSort2(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(bubbleSort2([5,4,3,2,1]))

/* insertion sort */
function insertionSort2(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
}
console.log(insertionSort2([5,4,3,2,1]))

/* selection sort */
function selectionSort2(arr){
    for(let i=0; i < arr.length - 1; i++){
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
console.log(selectionSort2([5,4,3,2,1]))

// Repeat -------------------- // Repeat -------------------- // Repeat -------------------- // Repeat -------------------- // Repeat --------------------

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

function factorear4(num){
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
console.log(factorear4(180))

function factorear5(num){
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
console.log(factorear5(180));

function factorear6(num){
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
console.log(factorear6(180))

function factorear7(n){
    let f = [1]
    let div = 2
    while(n > 1){
        while(n % div === 0){
            f.push(div)
            n /= div
        }
        div++
    }
    return f
}
console.log(factorear7(180))

function factorear8(num){
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
console.log(factorear8(180))

function factorear9(num){
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
console.log(factorear9(180))

function factorear10(num){
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
console.log(factorear10(180))

function factorear11(num){
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
console.log(factorear11(180))

function f12(n){
    let f = [1]
    let d = 2
    while(n > 1){
        while(n % d === 0){
            f.push(d)
            n /= d
        }
        d++
    }
    return f
}
console.log(f12(180))

function f13(n){
    let facts = [1]
    let div = 2
    while(n > 1){
        while(n % div === 0){
            facts.push(div)
            n /= div
        }
        div++
    }
    return facts
}
console.log(f13(180))

function f14(num){
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
console.log(f14(180))

function f15(num){
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
console.log(f15(180))

function f16(num){
    let arr = [1]
    let div = 2
    while(num > 1){
        while(num % div === 0){
            arr.push(div)
            num /= div
        }
        div++
    }
    return arr
}
console.log(f16(180))

function f17(num){
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
console.log(f17(180))



// bubble sort ( (<) (<) (j > j+1) )
function bs1(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
};
console.log(bs1([5,4,3,2,1]))

function bs2(arr){
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
console.log(bs2([5,4,3,2,1]))

function bs3(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(bs3([5,4,3,2,1]))

function bs4(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(bs4([5,4,3,2,1]))

function bs5(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
    return arr
}
console.log(bs5([5,4,3,2,1]))

function bs6(arr){
    for(let i=0; i < arr.length -1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(bs6([5,4,3,2,1]))

function bs7(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length -1; j++){
            if(arr[j] > arr[j+1]){
                let aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
    return arr
}
console.log(bs7([5,4,3,2,1]))

function bs8(arr){
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
console.log(bs8([5,4,3,2,1]))

function bs9(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
console.log(bs9([5,4,3,2,1]))

function bs10(arr){
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
console.log(bs10([5,4,3,2,1]))

function bs11(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
console.log(bs11([5,4,3,2,1]))

function bs12(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                let aux=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=aux
            }
        }
    }
    return arr
}
console.log(bs12([5,4,3,2,1]))

function bs13(arr){
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
console.log(bs13([5,4,3,2,1]))

function bs14(arr){
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
console.log(bs14([5,4,3,2,1]))

function bs15(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(bs15([5,4,3,2,1]))

function bs16(arr){
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
console.log(bs16([5,4,3,2,1]))

function bs17(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(bs17([5,4,3,2,1]))

function bs18(arr){
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
console.log(bs18([5,4,3,2,1]))



// insertion sort ( (<) (>) (j < j-1) )
function is1(arr){
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
console.log(is1([5,4,3,2,1]))

function is2(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
}
console.log(is2([5,4,3,2,1]))

function is3(arr){
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
console.log(is3([5,4,3,2,1]))

function is4(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
}
console.log(is4([5,4,3,2,1]))

function is5(arr){
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
console.log(is5([5,4,3,2,1]))

function is6(arr){
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
console.log(is6([5,4,3,2,1]))

function is7(arr){
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
console.log(is7([5,4,3,2,1]))

function is8(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            }
        }
    }
    return arr
}
console.log(is8([5,4,3,2,1]))

function is9(arr){
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
console.log(is9([5,4,3,2,1]))

function is10(arr){
    for(let i = 1; i < arr.length; i++){
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
console.log(is10([5,4,3,2,1]))

function is11(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
}
console.log(is11([5,4,3,2,1]))

function is12(arr){
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
console.log(is12([5,4,3,2,1]))

function is13(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr
}
console.log(is13([5,4,3,2,1]))

function is14(arr){
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
console.log(is14([5,4,3,2,1]))

function is15(arr){
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
console.log(is15([5,4,3,2,1]))


// selection sort ( (<) (min = i) (<) (j < min) (min = j))
function ss1(arr){
    for(let i=0; i < arr.length - 1; i++){
        let min = i
        for(let j = i+1; j < arr.length; j++){
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
console.log(ss1([5,4,3,2,1]))

function ss2(arr){
    for(let i=0; i < arr.length - 1; i++){
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
console.log(ss2([5,4,3,2,1]))

function ss3(arr){
    for(let i=0; i < arr.length - 1; i++){
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
console.log(ss3([5,4,3,2,1]))

function ss4(arr){
    for(let i=0; i < arr.length - 1; i++){
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
console.log(ss4([5,4,3,2,1]))

function ss5(arr){
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
}
console.log(ss5([5,4,3,2,1]))

function ss6(arr){
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
}
console.log(ss6([5,4,3,2,1]))

function ss7(arr){
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j = i + 1; j < arr.length; j++){
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
console.log(ss7([5,4,3,2,1]))

function ss8(arr){
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j=i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}
console.log(ss8([5,4,3,2,1]))

function ss9(arr){
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j=i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}
console.log(ss9([5,4,3,2,1]))

function ss10(arr){
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
}
console.log(ss10([5,4,3,2,1]))

function ss11(arr){
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j=i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}
console.log(ss11([5,4,3,2,1]))

function ss12(arr){
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
}
console.log(ss12([5,4,3,2,1]))

function ss13(arr){
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j=i+1; j < arr.length; j++){
            if(arr[j] < arr[min]) min = j
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}
console.log(ss13([5,4,3,2,1]))

function ss14(arr){
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j=i+1; j < arr.length; j++){
            if(arr[j] < arr[min]) min = j
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}
console.log(ss14([5,4,3,2,1]))

function ss15(arr){
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]) min = j
        }
        let aux = arr[i]
        arr[i] = arr[min]
        arr[min] = aux
    }
    return arr
}
console.log(ss15([5,4,3,2,1]))

function ss16(arr){
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
}
console.log(ss16([5,4,3,2,1]))



// New Rep...

// factorear
function facto001(num){
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
console.log(facto001(180))

// bubble sort
function bubbleSort001(arr){
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
console.log(bubbleSort001([5,4,3,2,1]))

// insertion sort
function insertionSort001(arr){
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
console.log(insertionSort001([5,4,3,2,1]))

// selection sort
function selectionSort001(arr){
    for(let i=0; i < arr.length; i++){
        let min = i
        for(let j = i+1; j < arr.length; j++){
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
console.log(selectionSort001([5,4,3,2,1]))

//quickSort
function quickSort(arr){
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
    return quickSort(left).concat(pivot,quickSort(right))
}
console.log(quickSort([5,4,3,2,1]))

//quickSHORT
function quickSortShort(arr){
    if(arr.length <= 1) return arr
    let pivot = arr[0], left = [], right = []
    for(let i=1; i < arr.length; i++){
        if(arr[i] <= pivot) left.push(arr[i])
        if(arr[i] > pivot) right.push(arr[i])
    }
    return quickSortShort(left).concat(pivot,quickSortShort(right))
}
console.log(quickSortShort([5,4,3,2,1]))