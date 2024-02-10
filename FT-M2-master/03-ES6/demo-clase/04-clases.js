// Clases

//---------------------------------------------------------------------------------

// función constructora (ejemplos)

function BinarySearchTree(value){
    this.value = value
    this.left = null;
    this.right = null;
};
const myBST = new BinarySearchTree('element 1')
console.log(myBST)
/* Persona

function Persona(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido
};
const domenico = new Persona('Domenico','Pagano')
console.log(domenico)
*/

// Sintaxis de clase (Class)
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getNombre(){
        return this.nombre
    }
}
const domenico = new Persona('Domenico','Pagano')
console.log(domenico)

    // Herencia:
    class Empleado extends Persona{
        constructor(nombre, apellido, cargo, salario){
            super(nombre, apellido)
            this.cargo = cargo;
            this.salario = salario;
        }
    }

    // Instancias:
    const empleado1 = new Empleado('Domenico','Pagano','Dibujante','USD ($) 5000.00');
    const empleado2 = new Empleado('Juanito','Perez','Rotulista','USD ($) 3000.00');
    const empleado3 = new Empleado('Perdita','Durango','Colorista','USD ($) 5000.00');
    const empleado4 = new Empleado('Mongo','Veloz','Guionista','USD ($) 4000.00');
    const empleado5 = new Empleado('God','Himself','Director','USD ($) 7500.00');

    // Método 'getNombre()'
    console.log(empleado1.getNombre())
    console.log(empleado2.getNombre())
    console.log(empleado3.getNombre())
    console.log(empleado4.getNombre())

    // Empleados
    console.log(empleado1);
    console.log(empleado2);
    console.log(empleado3);
    console.log(empleado4);

    const empleados = []
    empleados.push(empleado1,empleado2,empleado3,empleado4,empleado5)
    console.log(empleados)

    // Selector aleatorio:
    function randomSelector(arr){
        let random = Math.floor(Math.random() * arr.length)
        console.log(arr[random].nombre)
        return `${arr[random].nombre} ${arr[random].apellido}: [Cargo: ${arr[random].cargo}] [Salario: ${arr[random].salario}]`
    }

    console.log(randomSelector(empleados))