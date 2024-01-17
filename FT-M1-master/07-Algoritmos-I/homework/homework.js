'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

      // 1. Debemos guardar los factores en un arreglo
      // 2. Nuestro arreglo debe iniciar en 1
      // 3. Nuestro divisor debe iniciar en 2
      // 4. Iterar con un ciclo while
      // 5. Tener en cuenta la condición de corte
      // 6. Dentro del ciclo while: Nuestra división debe ser exacta
      // 7. Si es exacta: pusheamos el divisor al arreglo
      // 8. Dividimos el número con el divisor
      // 9. Si no es exacta: aumentamos el divisor en 1
      /*
        180 / 2 = 90
        90  / 2 = 45
        45  / 3 = 15
        15  / 3 = 5
        5   / 5 = 1
        ------------
        2 x 2 x 3 x 3 x 5 = 180
      */

  let arr = [1]
  let divisor = 2;
  while(num > 1){
    while(num % divisor === 0){
      arr.push(divisor)
      num /= divisor
    }
    divisor++
  }
  return arr
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  for(let i=0; i < array.length-1; i++){
    for(let j=0; j < array.length-1; j++){
      if(array[j] > array[j+1]){
        [array[j],array[j+1]] = [array[j+1],array[j]]
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=1; i < array.length; i++){
    for(let j=i; j > 0; j--){
      if(array[j] < array[j-1]){
        [array[j], array[j-1]] = [array[j-1], array[j]]
      }
    }
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=0; i < array.length - 1; i++){
    let min = i
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[min]){
        min = j
      }
    }
    let temp = array[i]
    array[i] = array[min]
    array[min] = temp
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
