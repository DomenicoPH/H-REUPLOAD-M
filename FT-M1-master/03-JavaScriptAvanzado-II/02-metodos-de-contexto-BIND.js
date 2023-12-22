// Métodos de contexto: bind | call | apply

// ------------------------------------------------------------------------------- BIND

/*  BIND
    Este método crea una función con el mismo
    cuerpo de la original, pero con la propiedad
    'this' vinculada a un objeto en particular.
    La función no se ejecuta de forma inmediata.
*/

var persona = {
    nombre: 'Domenico',
    apellido: 'Pagano',
};

function saludar(){
    console.log('Hola, mi nombre es ', this.nombre)
}
saludar()

var saludarPersona = saludar.bind(persona); // Hola, mi nombre es undefined
saludarPersona()    // Hola, mi nombre es Domenico

//...
var perro = {
    nombre: 'Gia',
    genero: 'hembra',
    raza: 'Chuscano Salchicho'
};
var gato = {
    nombre: 'Chifuz',
    genero: 'macho',
    raza: 'Trigrillo Corriente'
};

function saySomething(){
    return `hola, hola, mi nombre es ${this.nombre} y soy un ${this.raza}`
};
var sayDog = saySomething.bind(perro);
console.log(sayDog())
var sayCat = saySomething.bind(gato);
console.log(sayCat())

var sayPersona = saySomething.bind(persona)
console.log(sayPersona())

/*  BIND acepta parámetros. El primero siempre
    es 'this', los siguientes sirven para bindear
    los parámetros de una función. Esto se conoce 
    como function currying.
*/

function saludando(saludo){
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
};
var saludandoAalgien = saludando.bind(persona, 'Hola monstruo')
saludandoAalgien('perro')

var saludoDeGato = saludando.bind(gato,'miau!')
saludoDeGato()
var saludoDePerro = saludando.bind(perro,'guau!')
saludoDePerro()
