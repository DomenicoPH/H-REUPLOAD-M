// Métodos de contexto: bind | call | apply

// ------------------------------------------------------------------------------- CALL

var persona = {
    nombre: 'Domenico',
    apellido: 'Pagano',
};

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

// ---

function saludar(){
    console.log('Hola, mi nombre es ', this.nombre)
}
saludar()

// bind ------------------------------------------------------------------>
var saludarPersona = saludar.bind(persona); // Hola, mi nombre es undefined
saludarPersona()
// bind ------------------------------------------------------------------>

// call 
saludar.call(persona)
saludar.call(perro)
saludar.call(gato)

// ---

function saludando(saludo,a,b,c){
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(`${a} ${b} ${c}`)
}

saludando.call(persona, 'Buenos días', 'esto', 'es una', 'infamia!')
saludando.call(perro, 'Guau Guau', 'Hola bola amiguito!', 'aquí está el perrito,', '¿No me da un huesito?')