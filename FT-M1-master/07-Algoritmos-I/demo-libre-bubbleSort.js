// Bubble Sort
// video ref: https://youtu.be/ZBaXyAt7NOk?si=ygTcvXWgzBpDwwPD

/* Bucles o Ciclos anidados */

// Bucle for...
for(let i=0; i < 10; i++){
    console.log(i+1 + '. Hola, soy un ciclo')
}

// Bucle for anidado...
for(let i=0; i < 10; i++){
    for(let j=0; j < 10; j++){
        console.log('Soy un pollo!')
    }
    console.log(i+1 + '. Hola, soy un ciclo')
}

// Un ejemplo aún más claro...
console.log('Por cada (I) se repiten 5 (J) y por cada (J) se repiten 10 (K)')
for(let i=0; i < 3; i++){
    console.log(i+1 + '*(I)')
    for(let j=0; j < 5; j++){
        console.log(j+1 + `**(J)`)
        for(let k=0; k < 10; k++){
            console.log(k+1 + '***(K)')
        }
    }
}

// Otro ejemplo...
console.log('\nLineage:\nCada padre tiene tres hijos\nCada hijo tiene tres hijos\n')
for(let i=0; i < 3; i++){
    console.log('--> Padre\n')
    for(let j=0; j < 3; j++){
        console.log('----> Hijo\n')
        for(let k=0; k < 3; k++){
            console.log('------> nieto\n')
        }
    }
}

// En este ciclo, por cada vuelta, el subciclo J se irá reduciendo en 1 (j < 10 - i)
for(let i=0; i < 10; i++){
    console.log('***---i---***' + i)
    for(let j=0; j < 10 - i; j++){
        console.log('*J*' + j)
    }
}



/* Bubble Sort */

//Ex.1 ..............................................................................................................................
const myArrayBS1 = [80, 45, 2, 65, 3, 14, 11, 3]

function bubbleSort1(arr){
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

console.log(myArrayBS1)
console.log(bubbleSort1(myArrayBS1))
console.log(myArrayBS1) //array mutado


//Ex.2 ..............................................................................................................................
const myArrayBS2 = [999, 40, 38, 100, 7, 88, 70, 15, 9, 27, 91, 4, 60, 2]

function bubbleSort2(arr){
    for(let i=0; i < arr.length - 1; i++){
        for(let j=0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

console.log(myArrayBS2)
console.log(bubbleSort2(myArrayBS2))
console.log(myArrayBS2)


// ..................................................................................................................................

function bubble(arr){
    let n = arr.length - 1
    for(let i=0; i < n; i++){
        for(let j=0; j < n; j++){
            if(arr[j] > arr[j+1]){
                let aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
            }
        }
    }
    return arr
}
console.log(bubble([9, 7, 6, 5, 3, 2, 1]))
console.log(bubble([4, 99, 700, 60, 300, 2, 50, 3]))
console.log(bubble([999, 40, 38, 100, 7, 88, 70, 15, 9, 27, 91, 4, 60, 2]))