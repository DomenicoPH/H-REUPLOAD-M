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

// ---------------------------------------------------------------------------------------------->

// Más sobre BIND...
// Creamos dos objetos literales con coordenadas:
let c1 = {
    x: 5,
    y: 10,
}

let c2 = {
    x: 75,
    y: 235,
}

// Creamos una función que devuelve coordenadas utilizando 'this'
function printCoords(){
    console.log(this)
    console.log(this.x + ', ' + this.y)
}

// Asociamos la función al objeto cuyas coordenadas queremos usar.  |   Ex: printCoords.bind(c1)
// Asignamos a una nueva variable.  |   Ex: let c1_func
let c1_func = printCoords.bind(c1)
let c2_func = printCoords.bind(c2)
c1_func()
c2_func()

// ---------------------------------------------------------------------------------------------->

let monkey = {
    type: 'monkey',
    name: 'Kakarot',
    age: 20,
    tail: true,
}

let dog = {
    type: 'dog',
    name: 'Pluto',
    age: 5,
    tail: true,
}

let crab = {
    type: 'crab',
    name: 'Roque',
    age: 50,
    tail: false,
}

function gimmeAnimal(){
    console.log(this);
    console.log(`Hello! this is the story of ${this.name} the ${this.type} at the age of ${this.age}`)
    if(this.tail) console.log('Yeah! I have a tail!')
    else console.log('nope! no tail...')
};

console.log()
console.log('-- Monkey Story --')
let monkeyStory = gimmeAnimal.bind(monkey)
monkeyStory();

console.log()
console.log('-- Dog Story --')
let dogStory = gimmeAnimal.bind(dog)
dogStory();

console.log()
console.log('-- Crab Story --')
let crabStory = gimmeAnimal.bind(crab)
crabStory();

console.log()