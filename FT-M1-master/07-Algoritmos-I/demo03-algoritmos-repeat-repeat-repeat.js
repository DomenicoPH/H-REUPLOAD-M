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


// Selection Sort