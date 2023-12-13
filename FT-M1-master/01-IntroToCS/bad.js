// ---------------------------------------- FUNCIÓN: BINARIO A DECIMAL (opción 1)
function binarioAdecimal(num){
    let sum = 0;
    num = num.split('').reverse().join('')
    for(let i=0; i < num.length; i++){
        sum += (Math.pow(2, i) * Number(num[i]))
    }
    console.log(sum)
    return sum
};

// testing:
let a = binarioAdecimal('1')        // 1
let b = binarioAdecimal('10')       // 2
let c = binarioAdecimal('11')       // 3

console.log(a + b + c)
console.log(a + b === c)
console.log(c - a === b)

console.log(binarioAdecimal('100'))
console.log(binarioAdecimal('110'))
console.log(binarioAdecimal('111'))


// ---------------------------------------- BINARIO A DECIMAL (opción 2)
function binarioAdecimalDos(num) {
    num = num.split('') //1
    var suma = 0 //2
    for(var i=0; i < num.length; i++){ //3
       suma = suma + Math.pow(2, num.length - 1 - i) * num[i] //4
    }
    return suma //5
};
/*
    1. Tomamos la variable 'num' y le asignamos como valor un array con un string 
        por cada caracter de 'num' (string pasado por parámetro).
    2. Creamos la variable 'suma' y ke asignamos el valor de 0.
    3. Ciclo for para recorrer el array 'num' en toda su longitud y en cada caso
        realizar la siguiente operación:
    4. Asignamos a la variable 'suma' el valor de 'suma' (su valor inicial es 0)
        (más +) el resultado de la multiplicación de: 2 elevado a la potencia
        correspondiente al índice de num (índice que irá disminuyendo en 1 con
        cada iteración) (por *) cada uno de los valores de num (num[0] -> num [1]...)
    5. Terminado el ciclo for retornamos el valor de 'suma' correspondiente al valor
        decimal del binario pasado por parámetro.
*/

//testing:
console.log(binarioAdecimalDos('100'))
console.log(binarioAdecimalDos('110'))
console.log(binarioAdecimalDos('111'))


// ---------------------------------------- BINARIO A DECIMAL (opción 3)
function binarioAdecimalTres(num) {
    num = num.split('').reverse()
    let sum = 0;
    for(let i=0; i < num.length; i++){
        sum += num[i]*2**i
    }
    return sum;
};

//testing:
console.log(binarioAdecimalTres('100'))
console.log(binarioAdecimalTres('110'))
console.log(binarioAdecimalTres('111'))


// ---------------------------------------- BINARIO A DECIMAL (opción 4 / la más simple)
function binarioAdecimalSHORT(binario){
    let decimal = parseInt(binario, 2);
    return decimal;
}

console.log(binarioAdecimalSHORT('100'))
console.log(binarioAdecimalSHORT('110'))
console.log(binarioAdecimalSHORT('111'))