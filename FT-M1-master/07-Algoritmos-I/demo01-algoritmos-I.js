/* Algoritmos I */

// Big O Notation 

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
var arr2 = ['a', 'b', 'c', 'd', 'e']

for(let i=0; i < arr1.length; i++){
    console.log(arr1[i])
    for(let j=0; j < arr2.length; j++){
        console.log(arr2[j])
    }
}
// complejidad: O(n*m)

for(let i=0; i < arr1.length; i++){
    console.log(arr1[i])
    for(let j=0; j < arr2.length; j++){
        console.log(arr1[j])
    }
}
// complejidad: O(n²)

/*   ...Algoritmos...

    Algoritmo | Es una serie de pasos precisos y ordenados que se siguen
              | para resolver un problema o realizar una tarea.
    
    Eficiencia y Complejidad | Se refieren a su capacidad para resolver un
                             | problema en un tiempo y espacio determinados.
                             | Es importante analizarlos antes de usar un
                             | algoritmo en una aplicación para asegurarse
                             | de que no cause problemas de rendimiento.
*/

/* Algoritmos de ordenamiento (Bubble-Sort, Insertion-Sort y Selection-Sort) */

/*
    ♦  Bubble Sort | Es un algoritmo de ordenamiento que compara pares de
       elementos adyacentes de una lista y los intercambia si están en el
       orden incorrecto, repitiendo el proceso hasta que la lista esté
       ordenada.

    ♦  Insertion Sort  |   Recorre una lista de elementos y los inserta en
       su posición correcta en una nueva lista, manteniéndola ordenada a
       medida que avanza.

    ♦  Selection Sort  |   Busca el elemento más pequeño de una lista y lo
       intercambia con el primer elemento, luego busca el segundo elemento
       más pequeño y lo intercambia con el segundo elemento, repitiendo
       este proceso hasta que la lista esté ordenada.
*/


// 1. Bubble Sort ------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------

function bubbleSort(arr){
    const n = arr.length                        // 'n' equivale a la longitud del array
    for(let i = 0; i < n - 1; i++){             // Primer bucle: Recorre todos los elementos del arreglo
        for(let j = 0; j < n - i - 1; j++){     // Segundo bucle: Recorre los elementos restantes en el arreglo
            if(arr[j] > arr[j + 1]){            // Comparar elementos adyacentes y hacer el intercambio si están en el orden incorrecto
                let temp = arr[j]               
                arr[j] = arr[j + 1]             // Intercambio de elementos usando una variable temporal
                arr[j + 1] = temp               
            }
        }
    }
    return arr                                  // Retornar el arreglo ordenado
}

const myArray1 = [10, 12, 4, 26, 13, 9, 100, 14, 21, 18, 6, 1, 35, 60]
console.log(myArray1)
const bubbleSorted = bubbleSort(myArray1)

console.log(bubbleSorted)

/*  El algoritmo de ordenamiento Bubble Sort funciona comparando repetidamente pares de elementos adyacentes 
    en un arreglo y intercambiándolos si están en el orden incorrecto. El bucle externo recorre todo el arreglo, 
    y en cada iteración, el bucle interno compara elementos adyacentes y los intercambia si están en orden 
    descendente. Esto provoca que los elementos más grandes "bollen" hacia el final del arreglo, similar a cómo 
    suben las burbujas en un líquido. El proceso se repite hasta que ningún intercambio adicional es necesario, 
    lo que indica que el arreglo está completamente ordenado. Aunque Bubble Sort es intuitivo, su eficiencia es 
    limitada, especialmente en arreglos grandes, ya que tiene una complejidad de tiempo cuadrática. */



// 2. Isertion Sort ------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------

function insertionSort(arr){
    const n = arr.length;                       // 'n' equivale a la longitud del array
    for(let i = 1; i < n; i++){                 // Primer bucle: Recorre todos los elementos del arreglo
        const current = arr[i]                  // Almacena el valor actual para comparaciones y posibles intercambios
        let j = i - 1                           // 'j' equivale a la posición anterior a 'i' (izquierda).
        while(j >= 0 && arr[j] > current){      // Segundo bucle: Recorre los elementos anteriores al valor actual
            arr[j + 1] = arr[j]                 // Desplaza los elementos mayores que el valor actual a la derecha
            j--                                 // Resta 1 al valor de 'j'
        }
        arr[j + 1] = current                    // Coloca el valor actual en la posición correcta
    }
    return arr                                  // Retorna el arreglo ordenado
}
const myArray2 = [10, 12, 4, 26, 13, 9, 100, 14, 21, 18, 6, 1, 35, 60]
console.log(myArray2)
const insertionSorted = insertionSort(myArray2)

console.log(insertionSorted)

/*  El algoritmo de ordenamiento Insertion Sort recorre un arreglo y en cada iteración selecciona un elemento 
    (llamado current) para insertarlo en la posición correcta dentro de la porción ya ordenada del arreglo. 
    Comienza desde el segundo elemento (índice 1) hasta el final del arreglo. En cada paso, el algoritmo 
    compara el elemento actual con los elementos anteriores en la porción ordenada, desplazándolos hacia 
    la derecha hasta encontrar la posición correcta para insertar el elemento actual. La variable j se 
    utiliza para rastrear la posición actual durante este desplazamiento. El bucle while se ejecuta 
    mientras j es mayor o igual a cero y el elemento en la posición arr[j] es mayor que el elemento 
    current. Cuando se encuentra la posición correcta, se inserta el elemento current. Este proceso 
    continúa hasta que todos los elementos estén ordenados en el arreglo. El algoritmo de Insertion 
    Sort tiene una complejidad de tiempo cuadrática, pero es más eficiente que Bubble Sort en 
    ciertos casos y puede ser útil para arreglos pequeños o parcialmente ordenados. */



// 3. Selection Sort ------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------

function selectionSort(arr){
    const n = arr.length                        // 'n' equivale a la longitud del array
    for(let i = 0; i < n - 1; i++){             // Iterar a través de todo el arreglo, excepto el último elemento
        let minIndex = i                        // Suponer que el elemento actual es el mínimo
        for(let j = i + 1; j < n; j++){         // Buscar el índice del elemento mínimo en el resto del arreglo
            if(arr[j] < arr[minIndex]){         
                minIndex = j                    // Actualizar el índice del mínimo si se encuentra un elemento más pequeño
            }
        }
        let temp = arr[i]                       // Intercambiar el elemento actual con el mínimo encontrado
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr                                  // Retorna el arreglo ordenado
}
const myArray3 = [10, 12, 4, 26, 13, 9, 100, 14, 21, 18, 6, 1, 35, 60]
console.log(myArray3)
const selectionSorted = selectionSort(myArray3)

console.log(selectionSorted)


// all sorted -------------------------------------------------------------------------
console.log(bubbleSorted);   
console.log(insertionSorted);
console.log(selectionSorted);

/*  El algoritmo de ordenamiento Selection Sort funciona dividiendo el arreglo en dos secciones: 
    una ordenada y otra no ordenada. En cada iteración, el algoritmo busca el elemento más pequeño 
    en la porción no ordenada y lo intercambia con el primer elemento no ordenado. 
    La variable minIndex se utiliza para rastrear el índice del elemento más pequeño durante la 
    búsqueda. Este proceso de selección continúa hasta que todo el arreglo esté ordenado. 
    La eficiencia de Selection Sort radica en su simplicidad, ya que realiza un intercambio por 
    cada iteración exterior, pero tiene una complejidad cuadrática en el peor caso, siendo más 
    adecuado para arreglos pequeños o parcialmente ordenados. 
    El algoritmo modifica el arreglo original y devuelve el arreglo ordenado al finalizar. */