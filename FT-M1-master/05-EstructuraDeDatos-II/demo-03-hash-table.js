// Hash Table

function HashTable(){
    this.buckets = []
    this.numBuckets = 35
}

// hash
HashTable.prototype.hash = function(key){
    let hash = 0
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i)
    }
    return hash % this.numBuckets
}

// ---------------------------------- set
HashTable.prototype.set = function(key,value){
    if(typeof key !== 'string') throw new TypeError('Keys must be strings')
    let position = this.hash(key)
    if(!this.buckets[position]) this.buckets[position] = {};
    this.buckets[position][key] = value
}

// ---------------------------------- get
HashTable.prototype.get = function(key){
    let position = this.hash(key)
    if(this.buckets[position][key]) return this.buckets[position][key]
    return false
}   // * FALLA: (corregido más abajo)

// ---------------------------------- haskey
HashTable.prototype.hasKey = function(key){
    let position = this.hash(key)
    if(this.buckets[position][key]) return true
    return false
}   // * FALLA: (corregido más abajo)

// XX---> Métodos CORREGIDOS (Pisan a los anteriores) <---XX
HashTable.prototype.get = function(key){
    let position = this.hash(key)
    if(this.buckets[position] && this.buckets[position][key]) {
        return this.buckets[position][key]
    } else {
        console.log('El elemento no está en la tabla')
        return false
    }
}//---------------------------------- get corregido

HashTable.prototype.hasKey = function(key){
    let position = this.hash(key)
    if(this.buckets[position] && this.buckets[position][key]) {
        return true
    } else {
        console.log('false')
        return false
    }
}//---------------------------------- hasKey corregido


const miTablaHash = new HashTable()
console.log(miTablaHash)

// set
miTablaHash.set('001', {nombre: 'Domenico', apellido: 'Pagano', nacimiento: 1986})
miTablaHash.set('002', {nombre: 'Petunio', apellido: 'Parafino', nacimiento: 1920})
miTablaHash.set('003', {nombre: 'Gregoria', apellido: 'Mantequilla', nacimiento: 1845})
miTablaHash.set('004', {nombre: 'Flash', apellido: 'Gordo', nacimiento: 1945})
miTablaHash.set('005', {nombre: 'Nuevo', apellido: 'Milenio', nacimiento: 2000})
miTablaHash.set('006', {nombre: 'Caballero', apellido: 'Del Futuro', nacimiento: 3001})
miTablaHash.set('007', {nombre: 'James', apellido: 'Bond', nacimiento: 1930})
miTablaHash.set('008', {nombre: 'Graciela', apellido: 'Valderrama', nacimiento: 1987})
miTablaHash.set('009', {nombre: 'Gia', apellido: 'Perrito', nacimiento: 2016})

//get
console.log(miTablaHash.get('001'))
console.log(miTablaHash.get('008'))
console.log(miTablaHash.get('009'))
console.log(miTablaHash.get('002'))
console.log(miTablaHash.get('007'))
console.log(miTablaHash.get('005'))
console.log(miTablaHash.get('010'))
console.log(miTablaHash.get('000'))
console.log(miTablaHash.get('015'))

//hasKey
console.log(miTablaHash.hasKey('001'))
console.log(miTablaHash.hasKey('005'))




// Apuntes y pruebas ---------------------------------->>>

// test función hash
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