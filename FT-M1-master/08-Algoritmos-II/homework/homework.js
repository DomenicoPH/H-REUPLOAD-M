'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array
  let pivot = array[0]
  let left = []
  let right = []
  for(let i=1; i < array.length; i++){
    if(array[i] < pivot){
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return quickSort(left).concat(pivot, quickSort(right))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length === 1) return array
  let half = Math.floor(array.length / 2)
  let left = array.slice(0,half)
  let right = array.slice(half)
  return merge(mergeSort(left),mergeSort(right))
  //okey probemos ahora
}
// -- función auxiliar --
function merge(a1,a2){
  let i = 0 
  let j = 0
  let ord = []
  while(i < a1.length && j < a2.length){
    if(a1[i] < a2[j]){
      ord.push(a1[i])
      i++
    } else {
      ord.push(a2[j])
      j++
    }
  }
  return ord.concat(a1.slice(i),a2.slice(j))
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
