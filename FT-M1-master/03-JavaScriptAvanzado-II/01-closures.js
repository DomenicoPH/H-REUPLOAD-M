// Closures:

/*
    1. Es una función que retorna otra función.
    2. La función hija debe utilizar una variable de su función padre
*/

// Ex.1
function contenedor() {
    var caja = [];
    return function(item){
        caja.push(item);
        return caja;
    }
};

var miContenedor = contenedor();
console.log('-- mi Contenedor --')
console.log(miContenedor('libro'))
console.log(miContenedor('cuaderno'))
console.log(miContenedor('lápiz'))

var miSegundoContenedor = contenedor();
console.log('-- mi Segundo Contenedor --')
console.log(miSegundoContenedor('guitarra'))
console.log(miSegundoContenedor('bajo'))
console.log(miSegundoContenedor('batería'))


// Ex.2
function closure(box){
    return function(item){
        box.push(item)
        return box
    }
};

let miClosure1 = closure([])
console.log(miClosure1('araña'))
console.log(miClosure1('mosca'))
console.log(miClosure1('mosquito'))


// Ex.3 Counter con Closure
function contador(){
    var count = 0
    return function(){
        count++
        return count
    }
};

let cuenta = contador()
console.log(cuenta())
console.log(cuenta())
console.log(cuenta())
console.log(cuenta())
console.log(cuenta())
console.log(cuenta())


// Ex.4 Smart Counter
function contadorSmart(){
    var count = 0
    return function(operation){
        if(operation === '+'){
            count++
            return count
        } else if(operation === '-'){
            count--
            return count
        } else {
            return 'operador inválido'
        }
    }
};

let smartCount = contadorSmart()
console.log(smartCount('+'))
console.log(smartCount('+'))
console.log(smartCount('+'))
console.log(smartCount('+'))
console.log(smartCount('+'))

console.log(smartCount('-'))
console.log(smartCount('-'))
console.log(smartCount('-'))
console.log(smartCount('-'))

console.log(smartCount('*'))
console.log(smartCount('/'))
console.log(smartCount('%'))