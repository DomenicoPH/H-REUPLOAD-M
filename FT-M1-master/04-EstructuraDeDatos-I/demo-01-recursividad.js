// Estructura de datos | demo

// 1. Recursividad

// 1.1. Cuenta números:
function contarNumeros(num){
    console.log(`Limit ${num}:`)
    for(let i=0; i <= num; i++){
        console.log(i)
    }
}
contarNumeros(1);
contarNumeros(5);
contarNumeros(10);

//---

// 1.2. Cuenta regresiva:
function cuentaRegresiva(num){
    console.log(num)
    if(num > 0){    // --- CORTE
        cuentaRegresiva(num - 1)
    }
}
cuentaRegresiva(5)
cuentaRegresiva(10)

function otraCuentaRegresiva(num){
    if(num < 0){    // --- CORTE
        console.log('FINIT!')
    } else {
        console.log(num)
        otraCuentaRegresiva(num - 1)
    }
}
otraCuentaRegresiva(4)

//---

// 1.3. Factorial

/*
    5!  =>  5 * 4 * 3  * 2 * 1
    5!  =>  5 * 4!
    4!  =>  4 * 3!
    3!  =>  3 * 2!
    2!  =>  2 * 1!
    1!  =>  1
*/
function factorial(num){
    if(num === 0 || num === 1){     //CORTE
        return 1
    } else if(num < 0)              //CORTE
        return 'NEGATIVO'
    return num * factorial(num - 1)
};

console.log(factorial(-5))
console.log(factorial(-3))
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))