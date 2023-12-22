// Métodos de contexto: bind | call | apply

// ------------------------------------------------------------------------------- APPLY

/*  APPLY
    Funciona igual que Call, con la única
    diferencia de que con apply los argumentos
    se pasan dentro de un arreglo.

    ** Se ejecuta en el momento. No se guarda
*/

var persona = {
    nombre: 'Domenico',
    apellido: 'Pagano',
};

function saludando(saludo,a,b,c){
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(`${a} ${b} ${c}`)
}

// call: saludando.call(persona, 'Hola', 1, 2, 3);

// apply
saludando.apply(persona, ['Hola', 1, 2, 3])

let eng = ['Hello', 'one', 'two', 'three']
saludando.apply(persona, eng)