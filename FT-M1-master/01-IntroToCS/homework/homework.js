'use strict';

function BinarioADecimal(num) {
   /* Necesito las posiciones (<- de derecha a izquierda <-).
      Elevar la base 2 (porque trabajamos en binario) a las posiciones.
      El resultado de la potencia lo multiplicabamos por el número binario.
      Sumamos los resultados de todos los cálculos respectivos a su posición.
   */
   num = num.split('')
   var suma = 0
   for(var i=0; i < num.length; i++){
      suma = suma + Math.pow(2, num.length - 1 - i) * num[i]
   }
   return suma
}

function DecimalABinario(num) {
   /* Dividir entre 2.
      El resultado dividirlo entre 2 hasta que ya no se pueda.
      Juntamos los restos de abajo hacia arriba (de derecha a izquierda).
   */
   let binario = []
   while(num !== 0){
      binario.unshift(num % 2)
      num = Math.floor(num / 2)
   }
   return binario.join('')
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
