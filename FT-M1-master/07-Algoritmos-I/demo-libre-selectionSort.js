/* Selection Sort */

function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        console.log(arr)
    }
    return arr
}

const unorderedArr = [5, 3, 4, 2, 1]
selectionSort(unorderedArr)
console.log(unorderedArr)


/*  El algoritmo de ordenación por selección (Selection Sort) funciona seleccionando repetidamente 
    el elemento mínimo de la parte no ordenada del array y colocándolo al principio de la parte ordenada. 
    En cada iteración, se busca el índice del elemento mínimo en la porción no ordenada del array, y luego 
    se intercambia con el primer elemento de la parte no ordenada. Esto se repite hasta que todo el array 
    está ordenado. 
    La lógica radica en la selección sistemática del elemento mínimo en cada iteración, asegurando que la 
    parte ordenada crezca y la parte no ordenada se reduzca progresivamente. Aunque Selection Sort no es 
    el algoritmo más eficiente para grandes conjuntos de datos, es simple y fácil de implementar. */


/*  1.  Recorre el array desde el comienzo hasta el penúltimo valor 
    2.  Se declara minIndex = i (i al comienzo es 0, luego 1, luego 2, etc)
    3.  Por cada iteración se recorre nuevamente todo el arreglo, pero desde el índice siguiente de i (i + 1)

    Flujo:

    arr = [ 5, 3, 4, 2, 1 ]
          [ 5, -->( 3, 4, 2, 1 )<-- ]

    1. Primera iteración i => arr[0] => 5
    2. Primera iteración minIndex => i => arr[i] = arr[0] => 5
    3. Primera iteración j = i + 1 => arr[j] = arr[1] => 3
        3.1. arr[j] (3) < arr[minIndex] (5) -- ?? -- TRUE -- minIndex = j  --->  Ahora arr[minIndex] = 3 
        3.2. arr[j] (4) < arr[minIndex] (3) -- ?? -- FALSE -- nada...      --->  Ahora arr[minIndex] = 3
        3.3. arr[j] (2) < arr[minIndex] (3) -- ?? -- TRUE -- minIndex = j  --->  Ahora arr[minIndex] = 2
        3.4. arr[j] (1) < arr[minIndex] (2) -- ?? -- TRUE -- minIndex = j  --->  Ahora arr[minIndex] = 1
            3.5. SWAP - arr[i](5), arr[minIndex](1)  =  arr[minIndex](1), arr[i](5)  ---> [5, 3, 4, 2, 1] = [1, 3, 4, 2, 5]

    arr = [ 1, 3, 4, 2, 5 ]
          [ 1, 3, -->( 4, 2, 5 )<-- ]

    4. Segunda iteración i => arr[1] => 3
    5. Segunda iteración minIndex => i => arr[i] = arr[1] => 3
    6. Segunda iteración j = i + 1 => arr[j] = arr[2] => 4
        6.1. arr[j] (4) < arr[minIndex] (3) -- ?? -- FALSE nada...         --->  Ahora arr[minIndex] = (3)
        6.2. arr[j] (2) < arr[minIndex] (3) -- ?? -- TRUE -- minIndex = j  --->  Ahora arr[minIndex] = (2)
        6.3. arr[j] (5) < arr[minIndex] (2) -- ?? -- False nada...         --->  Ahora arr[minIndex] = (2)
            6.4. SWAP - arr[i](3), arr[minIndex](2)  =  arr[minIndex](2), arr[i](3)  ---> [1, 3, 4, 2, 5] = [1, 2, 4, 3, 5]

    arr = [ 1, 2, 4, 3, 5 ]
          [ 1, 2, 4, -->( 3, 5 )<-- ]

    7. Tercera iteración i => arr[2] => 4
    8. Tercera iteración minIndex => i => arr[i] = arr[2] => 4
    9. Tercera iteración j = i + 1 => arr[j] = arr[3] => 3
        9.1. arr[j] (3) < arr[minIndex] (4) -- ?? -- TRUE -- minIndex = j  --->  Ahora arr[minIndex] = (3)
        9.2. arr[j] (5) < arr[minIndex] (3) -- ?? -- FALSE nada...

    arr = [ 1, 2, 3, 4, 5 ]
          [ 1, 2, 3, 4, -->( 5 )<-- ]

*/
