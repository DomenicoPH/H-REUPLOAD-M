// ---------------------------------------- FUNCIÓN: DECIMAL A BINARIO (opción 1)
function decimalAbinario(num) {
    let binario = []
    while(num !== 0){
       binario.unshift(num % 2)
       num = Math.floor(num / 2)
    }
    return binario.join('')
 }; 
 /*
    1. Creamos una variable llamada 'binario' y le asignamos como valor
        un array vacio. En este array acumularemos los dígitos de nuestro
        número binario.
    2. Ciclo while. Mientras 'num' (variable recibida por parámetro: Number)
        sea diferente de cero (0) se ejecutará lo siguiente:
    3. Añadimos al comienzo (unshift) del array 'binario' el resto (%) de
        la división de 'num' entre 2 (2: base binaria)
    4. Dividimos 'num' entre 2 (2: base binaria) y redondeamos hacia abajo
        con Math.floor(). En algún punto las divisiones entre 2 llevaran a
        que 'num' valga cero(0). Entonces el ciclo while terminará.
    5. Retornamos binario, que es un array de strings. Como lo que necesitamos
        retornar es un string que contenga el valor en binario recién obtenido,
        hacemos la transformación utilizando .join('') en 'binario'. 
 */

//testing:
console.log(decimalAbinario(1)); 
console.log(decimalAbinario(2)); 
console.log(decimalAbinario(3)); 
console.log(decimalAbinario(4)); 
console.log(decimalAbinario(5)); 
console.log(decimalAbinario(6)); 
console.log(decimalAbinario(7)); 
console.log(decimalAbinario(8)); 
console.log(decimalAbinario(9)); 
console.log(decimalAbinario(10));
console.log(decimalAbinario(11));
console.log(decimalAbinario(12));

// ---------------------------------------- FUNCIÓN: DECIMAL A BINARIO (opción 2)
function decimalAbinarioSHORT(decimal){
    let binario = parseInt(decimal, 10)
    return binario;
};

//testing:
console.log(decimalAbinarioSHORT(1)); 
console.log(decimalAbinarioSHORT(2)); 
console.log(decimalAbinarioSHORT(3)); 
console.log(decimalAbinarioSHORT(4)); 
console.log(decimalAbinarioSHORT(5)); 
console.log(decimalAbinarioSHORT(6)); 
console.log(decimalAbinarioSHORT(7)); 
console.log(decimalAbinarioSHORT(8)); 
console.log(decimalAbinarioSHORT(9)); 
console.log(decimalAbinarioSHORT(10));
console.log(decimalAbinarioSHORT(11));
console.log(decimalAbinarioSHORT(12));
