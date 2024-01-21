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

// ------------------------------------------------------------------------------------------------------------------- //

// From Henry-Code-Review:
function bubbleSort(arr){
    let semaforo = true
    while(semaforo){
        semaforo = false
        for(let i=0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                let aux = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = aux
                semaforo = true
            }
        }
    }
    return arr
};

const arrA = [9, 7, 5, 2, 6, 1, 3, 4, 8]
console.log(bubbleSort(arrA))

const arrB = [100, 40, 87, 91, 36, 12, 29, 78, 1, 64, 55]
console.log(bubbleSort(arrB))

// Re-DO (con explicación) --------------------------------------------------------------------------------------------------------------------------------------->>>

function myBubbleSortFunction(arr){
    let switcher = true                             // Crea un interruptor establecido en ON (true)
    while(switcher){                                // MIENTRAS el interruptor esté activado ON (true) haz lo siguiente:
        switcher = false                                // Apaga el interruptor (false)
        for(let i=0; i < arr.length - 1; i++){          // Recorre el array desde el primer índice hasta el penúltimo (esto porque compararemos el primero con el segundo, el segundo con el tercero, y eventualmente el penúltimo con el último)
            if(arr[i] > arr[i+1]){                          // Recorriendo el array nos preguntamos si arr[i] es mayor que arr[i+1] (comparamos la posición en curso con el valor en la siguiente posición) Si es mayor hacemos el SWAP: 
                let aux = arr[i]                                // 'aux' tiene el valor situado en la posición actual (lo preservamos en esta variable temporal)
                arr[i] = arr[i+1]                               // la posición actual ahora guarda el valor que se encontraba en la posición siguiente
                arr[i+1] = aux                                  // la posición siguiente ahora guarda el valor que preservamos en la variable temporal 'aux'
                switcher = true                                 // hecho el SWAP --> volvemos a activar el interruptor
            }
        }
    }
    return arr                                      // Después de dar todas las vueltas necesarias para ordenar el array, lo retorna ordenado.
}

let testArrayOne = [25, 45, 5, 75]
let testArrayTwo = [10, 8, 6, 4, 2]
console.log(myBubbleSortFunction(testArrayOne))
console.log(myBubbleSortFunction(testArrayTwo))

/*  Flujo ----> let testArrayOne = [25, 45, 5, 75] ----> myBubbleSortFunction(testArrayOne)

    > switcher = TRUE

    ---> WHILE switcher
    ------> switcher = FALSE
        -----> FOR: i = 0
                arr[0](25) > arr[1](45) ?? FALSE
        -----> FOR i = 1
                arr[1](45) > arr[2](5) ?? TRUE
                SWAP:
                --> aux = 45
                --> arr[1](45) = arr[2](5) -> ahora arr[1] = (5)
                --> arr[2](5) = aux(45) -> ahora arr[2] = (45)
                ------> switcher = TRUE
        -----> FOR i = 2
                arr[2](45) > arr[3](75) ?? FALSE
        -----> FOR i = 2 => arr.length - 1 (---STOP---)

    ----------------------> arr = [25, 5, 45, 75]

    > switcher = TRUE

    ---> WHILE switcher
    ------> switcher = FALSE
        -----> FOR: i = 0
                arr[0](25) > arr[1](5) ?? TRUE
                SWAP:
                --> aux = 25
                --> arr[0](25) = arr[1](5) -> ahora arr[0] = (5)
                --> arr[1](5) = aux(25) -> ahora arr[1] = (25)
                ------> switcher = TRUE
        -----> FOR: i = 1
                arr[1](25) > arr[2](45) ?? FALSE
        -----> FOR: i = 2
                arr[2](45) > arr[3](75) ?? FALSE
        -----> FOR i = 2 => arr.length - 1 (---STOP---)

    ----------------------> arr = [5, 25, 45, 75]


    La notación Big O del algoritmo de ordenamiento Bubble Sort que es O(n^2). 
    Esto se debe a que el algoritmo utiliza dos bucles anidados. El bucle externo 
    se ejecuta hasta que no se realice ningún intercambio durante el bucle interno, 
    y el bucle interno recorre el arreglo y compara elementos adyacentes, realizando 
    intercambios si es necesario. En el peor caso, con cada iteración del bucle externo, 
    se deben realizar n iteraciones del bucle interno, lo que da como resultado una 
    complejidad cuadrática de O(n^2).

*/