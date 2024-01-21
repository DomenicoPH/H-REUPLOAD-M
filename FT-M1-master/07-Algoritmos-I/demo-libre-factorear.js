/* Algoritmos */

// Ejemplo: Factorear

/*  
    ♦ Instrucciones:
    - Factorear el número recibido como parámetro (num) y devolver un array.
    - Los factores por los cuales se va dividiendo a dicho número (num) (de menor a mayor).
    - Ejemplo: factorear(180) ---> [1, 2, 2, 3, 3, 5] <-- ya que --> 1 x 2 x 2 x 3 x 3 x 5 = 180

    ♦  Pseudocódigo:
    1. Guardar los factores en un arreglo.
    2. Dicho arreglo debe iniciar en 1.
    3. Iniciar divisor en 2.
    4. Iterar con ciclo 'while'.
    5. Considerar la condición de corte del ciclo 'while'.
    6. Dentro de while: la división debe ser exacta
    7. Si es exacta -> pusheamos el divisor
    8. Dividimos 'num' entre el divisor
    9. Si no es exacta -> aumentamos el divisor en 1
    10. Retornar el arreglo de factores.
*/

function factorear(num){
    let arr = [1]                           // creamos un arreglo y lo inicializamos con un 1
    let divisor = 2                         // el divisor inicial será 2
    while(num > 1){                         // mientras 'num' sea mayor que 1:
        while(num % divisor === 0){         // mientras la división de 'num' y 'divisor' sea exacta
            arr.push(divisor)               // añadimos ese divisor al arreglo con 'push'
            num /= divisor                  // ahora dividimos 'num' entre el 'divisor'
        }
        divisor++                           // aumentamos el divisor en 1 (si era 2, ahora será 3)
    }
    return arr                              // retornamos el arreglo con todos los divisores exactos
}

//test:
console.log(factorear(180))
console.log(factorear(360))
console.log(factorear(100))
console.log(factorear(24))

/*  Flujo del algoritmo --> console.log(factorear(180)) --> [1, 2, 2, 3, 3, 5]

     -> arr = [1]
     -> divisor = 2
    ----> num(180) > 1 ?? (SI) --->
    --------> num(180) % divisor(2) === 0 ?? (SI) √
            ----> arr = [1, 2]
            ----> num(180) / divisor(2) = num(90)
    --------> num(90) % divisor(2) === 0 ?? (SI) √
            ----> arr = [1, 2, 2]
            ----> num(90) / divisor(2) = num(45)
    --------> num(45) % divisor(2) === 0 ?? (NO) XX
        
     -> divisor(2) + 1 = divisor(3)

    ----> num(45) > 1 ?? (SI) --->
    --------> num(45) % divisor(3) === 0 ?? (SI) √
            ----> arr = [1, 2, 2, 3]
            ----> num(45) / divisor(3) = num(15)
    --------> num(15) % divisor(3) === 0 ?? (SI) √
            ----> arr = [1, 2, 2, 3, 3]
            ----> num(15) / divisor(3) = num(5)
    --------> num(5) % divisor(3) === 0 ?? (NO) XX
        
     -> divisor(3) + 1 = divisor(4)

    ----> num(5) > 1 ?? (SI) --->
    --------> num(5) % divisor(4) === 0 ?? (NO) XX

     -> divisor(4) + 1 = divisor(5)
        
    ----> num(5) > 1 ?? (SI) --->
    --------> num(5) % divisor(5) === 0 ?? (SI) √
            ----> arr = [1, 2, 2, 3, 3, 5]
            ----> num(5) / divisor(5) = num(1)
    --------> num(1) % divisor(5) === 0 ?? (NO) XX
        
     -> divisor(5) + 1 = divisor(6)

    ----> num(1) > 1 ?? (NO) XX

        ----> Retorna arr = [1, 2, 2, 3, 3, 5]
*/

function factoreador(num){
    let arr = [1]
    let divisor = 2
    while(num > 1){
        while(num % divisor === 0){
            arr.push(divisor)
            num = num / divisor
        }
        divisor++
    }
    return arr
}

console.log(factoreador(10))
console.log(factoreador(180))
console.log(factoreador(1920))

