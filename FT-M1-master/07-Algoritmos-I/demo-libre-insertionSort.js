/* Insertion Sort */

const nums = [6, 2, 4, 3, 1, 5]

function insertionSort(arr){
    for(let i=1; i < arr.length; i++){                          // Loop Externo (i): Este bucle comienza desde el segundo elemento de la matriz (índice 1) hasta el último elemento (arr.length - 1). El primer elemento (índice 0) se considera ordenado inicialmente.
        for(let j=i; j > 0; j--){                               // Loop Interno (j): Para cada elemento en el bucle externo, se ejecuta un bucle interno que retrocede desde el índice actual (i) hasta el primer elemento (índice 0).
            if(arr[j] < arr[j-1]){                              // Comparación: En cada iteración del bucle interno, se compara el elemento actual (arr[j]) con el elemento a su izquierda (arr[j-1]).
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]           // Intercambio (Swap): Si el elemento actual es menor que el elemento a su izquierda, se realiza un intercambio de valores utilizando la sintaxis de desestructuración de JavaScript. Esto coloca el elemento más pequeño en su posición correcta.
            }
        }
    }
    return arr                                                  // Resultado: Después de que ambos bucles hayan terminado de ejecutarse, la matriz estará ordenada de manera ascendente.
}

console.log(nums) // original ->
console.log(insertionSort(nums))
console.log(nums) // mutado --->


/*  El algoritmo de ordenamiento por inserción (Insertion Sort) opera recorriendo la matriz 
    desde el segundo elemento hasta el último. En cada iteración del bucle externo, el 
    algoritmo selecciona un elemento y lo compara con los elementos a su izquierda en el 
    bucle interno. Si el elemento actual es menor que el elemento a su izquierda, 
    intercambian posiciones. Este proceso continúa hasta que el elemento alcanza 
    su posición correcta en la parte ordenada del arreglo. 
    El bucle externo se encarga de avanzar a través de todos los elementos, ampliando 
    la sección ordenada en cada iteración. El resultado es una matriz completamente 
    ordenada al final del proceso. La clave del algoritmo radica en la comparación 
    y los intercambios sucesivos que aseguran que cada elemento esté en su posición 
    correcta dentro del contexto ordenado, generando una matriz ordenada al final 
    de la ejecución. 
    La complejidad temporal en el peor caso es O(n^2), siendo n la longitud de la matriz. */


// Otros ejemplos:
//...........................................
function insertionSort2(arr){
    for(let i=1; i < arr.length; i++){
        let current = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > current){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current
    }
    return arr
}

const desordenado = [10, 9, 45, 6, 4, 1]
console.log(insertionSort2(desordenado))

//...........................................
function insertionSort3(arr){
    for(let i=1; i < arr.length; i++){
        for(let j=i; j > 0; j--){
            if(arr[j] < arr[j-1]){
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
    }
    return arr
}

const arrayDesordenado = [50, 20, 80, 16, 9, 15, 5, 1]
console.log(insertionSort3(arrayDesordenado))