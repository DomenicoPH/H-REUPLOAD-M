// Hash Table

function HashTable(){
    this.buckets = []
    this.numBuckets = 35
}

// hash:
HashTable.prototype.hash = function(key){
    let hash = 0
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i)
    }
    return hash % this.numBuckets
}

// set
HashTable.prototype.set = function(key,value){
    if(typeof key !== 'string') throw new TypeError('Keys must be strings')
    let position = this.hash(key)
    if(!this.buckets[position]) this.buckets[position] = {};
    this.buckets[position][key] = value
}

// get
HashTable.prototype.get = function(){

}

// haskey
HashTable.prototype.haskey = function(){

}

const miTablaHash = new HashTable()
console.log(miTablaHash)

console.log(miTablaHash.hash('loco'))
console.log(miTablaHash.hash('viejo'))
console.log(miTablaHash.hash('cansado'))
console.log(miTablaHash.hash('perro'))
console.log(miTablaHash.hash('gato'))
console.log(miTablaHash.hash('persona'))

// casos de colisión
console.log(miTablaHash.hash('las'))
console.log(miTablaHash.hash('sal'))
console.log(miTablaHash.hash('als'))


//charCodeAt()
console.log('a'.charCodeAt())
console.log('A'.charCodeAt())


// Sobre esta línea: 'this.buckets[position] = this.buckets[position] || []'
/*
    La línea this.buckets[position] = this.buckets[position] || [] es una forma concisa de verificar si 
    this.buckets[position] está definido o tiene un valor asignado. En caso de que this.buckets[position] 
    sea undefined (o cualquier otro valor falsy), se asigna un nuevo array vacío [] a this.buckets[position]. 
    Si this.buckets[position] ya tiene algún valor asignado (es truthy), no se realiza ninguna acción, 
    manteniendo el valor existente.

    Este patrón es útil para garantizar que una variable tenga un valor predeterminado (en este caso, un array 
    vacío) si no está definida o tiene un valor falsy. En el contexto de una tabla hash, donde this.buckets es 
    el contenedor para todos los buckets en la tabla hash y position es un índice específico donde se almacenarán 
    los valores, esta línea se asegura de que cada posición (o bucket) tenga un array asignado para almacenar 
    múltiples valores, evitando errores al intentar agregar valores a una posición indefinida o no inicializada.
*/

/* FUNCIONES SET ALTERNATIVAS

HashTable.prototype.setALTB = function(key,value){                          // set alternativo
    if(typeof key !== 'string') throw TypeError('Keys must be strings')     // Si el tipo de dato de 'key' NO ES un string -> lanza TypeError('Keys must be strings') 
    let position = this.hash(key)                                           // 'position' es igual al valor resultante de pasar la 'key' por la función 'hash'
    this.buckets[position] = this.buckets[position] || []                   // Verifica si en la posición calculada por 'hash' ya existe algún valor. Si no hay nada crea un array vacio
    this.buckets[position].push({ key: key, value: value })                 // Ahora que la posición contiene un array vacio, hacemos push en el array añadiendo un objeto con las 'key' y 'value' recibidas por parámetro
}

HashTable.prototype.setALTC = function(key,value){                          // set alternativo
    var index = this.hash(key)                                              //index es igual al resultado de la 'key' (pasada por parámetro) pasada por la función 'hash'
    if(!this.buckets[index]){                                               //Verifica que no haya nada en 'index'
      this.buckets[index]                                                   //Si no hay elementos en ese índice, crear un array vacio
    }
    this.buckets[index].push([key,value])                                   //Añadir el par clave-valor al array
    return this
}
*/