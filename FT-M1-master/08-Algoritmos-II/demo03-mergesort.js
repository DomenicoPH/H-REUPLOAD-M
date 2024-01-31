/* mergeSort */

function demoMerge(arr1,arr2){
    let i = 0
    let j = 0
    let ordenados = []
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            ordenados.push(arr1[i])
            i++
        } else {
            ordenados.push(arr2[j])
            j++
        }
    }
    return ordenados.concat(arr1.slice(i),arr2.slice(j))
};

function demoMergeSort(arr){
    if(arr.length === 1) return arr
    let half = Math.floor(arr.length / 2)
    let left = arr.slice(0,half)
    let right = arr.slice(half)
    return demoMerge(demoMergeSort(left),demoMergeSort(right))
};

console.log(demoMergeSort([5,4,3,2,1]))

//----------------------------------------------------------------------------------------------------------------

//Flujo -->
/*  demoMergeSort([5,4,3,2,1])

    [5,4,3,2,1].length = 1 ?? FALSE
    half = 2
    left = [5,4]
    right = [3,2,1]

    return -> demoMerge(demoMergeSort[5,4],demoMergeSort[3,2,1])

            demoMergeSort[5,4] -->
            [5,4].length = 1 ?? FALSE
            half = 1
            left = [5]
            right = [4]

            return -> demoMerge(demoMergeSort[5], demoMergeSort[4])

                    demoMergeSort[5] -->
                    [5].length = 1 ?? TRUE

                    demoMergeSort[4] -->
                    [4].length = 1 ?? TRUE

            demoMergeSort[3,2,1] -->
            [3,2,1].length = 1 ?? FALSE
            half = 1
            left = [3]
            right = [2,1]

            return -> demoMerge(demoMergeSort[3], demoMergeSort[2,1])

                    demoMergeSort[3] -->
                    [3].length = 1 ?? TRUE

                    demoMergeSort[2,1] -->
                    [2,1].length = 1 ?? FALSE
                    half = 1
                    left = [2]
                    right = [1]

                    return -> demoMerge(demoMergeSort[2], demoMergeSort[1])

                            demoMergeSort[2] -->
                            [2].length = 1 ?? TRUE

                            demoMergeSort[1] -->
                            [1].length = 1 ?? TRUE



*/

//----------------------------------------------------------------------------------------------------------------

function mergeAux01(arr1,arr2){
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
function mergeSort01(arr){
    if(arr.length === 1) return arr
    let half = Math.floor(arr.length / 2)
    let left = arr.slice(0,half)
    let right = arr.slice(half)
    return mergeAux01(mergeSort01(left),mergeSort01(right))
};
console.log(mergeSort([5,4,3,2,1]))

//----------------------------------------------------------------------------------------------------------------

// Repeat
function merge(a1,a2){
    let i = 0
    let j = 0
    let order = []
    while(i < a1.length && j < a2.length){
        if(a1[i] < a2[j]){
            order.push(a1[i])
            i++
        } else {
            order.push(a2[j])
            j++
        }
    }
    return order.concat(a1.slice(i), a2.slice(j))
};
function mergeSort(arr){
    if(arr.length === 1) return arr
    let half = Math.floor(arr.length / 2)
    let left = arr.slice(0,half)
    let right = arr.slice(half)
    return merge(mergeSort(left),mergeSort(right))
};
console.log(mergeSort([5,4,3,2,1]))

// -- REPEAT ----------------------------------------------------------------------------------------------------------------

function aux01(a1,a2){
let i = 0
let j = 0
let o = []
while(i < a1.length && j < a2.length){
    if(a1[i] < a2[j]){
        o.push(a1[i])
        i++
    } else {
        o.push(a2[j])
        j++
    }
}
return o.concat(a1.slice(i),a2.slice(j))
};
function ms01(arr){
    if(arr.length === 1) return arr
    let half = Math.floor(arr.length / 2)
    let left = arr.slice(0,half)
    let right = arr.slice(half)
    return aux01(ms01(left),ms01(right))
};
console.log(ms01([5,4,3,2,1]))

//----------------------------------------------------------------------------------------------------------------

function aux02(arr1,arr2){
    let i = 0
    let j = 0
    let ordenados = []
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            ordenados.push(arr1[i])
            i++
        } else {
            ordenados.push(arr2[j])
            j++
        }
    }
    return ordenados.concat(arr1.slice(i), arr2.slice(j))
}
function ms02(arr){
    if(arr.length === 1) return arr
    let half = Math.floor(arr.length / 2)
    let left = arr.slice(0,half)
    let right = arr.slice(half)
    return aux02(ms02(left),ms02(right))

};
console.log(ms02([5,4,3,2,1]))