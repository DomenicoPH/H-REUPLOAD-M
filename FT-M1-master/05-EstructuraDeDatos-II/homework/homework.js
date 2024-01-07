'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null
  this._length = 0
}

function Node(value) {
  this.value = value
  this.next = null
}

LinkedList.prototype.add = function(value){

  let node = new Node(value)              //Creamos un nodo con el valor pasado por parámetro
  let current = this.head;                //Creamos current y le asignamos la cabeza de la lista

  if(!current){                           //Si current apunta a null (lista vacia)
    this.head = node                      //this.head ahora apunta al nuevo nodo
    this._length++
    return value                          // --- return
  }

  while(current.next){                    //Mientras current.next apunte a algo
    current = current.next                //Ahora current apunta al nodo siguiente a current (irá iterando hasta que current.next apunte a null, entonces saldrá del ciclo)
  }
  current.next = node                     //Terminado el ciclo, asigna el nuevo nodo a current.next
  this._length++
  return value                            // --- return

};

LinkedList.prototype.remove = function(){

  if(!this.head){                         //Si this.head apunta a null (lista vacia)...
    return null                           //retorna null (lista vacia)
  }

  let current = this.head                 //Creamos current y le asignamos la cabeza de la lista
  let previous = null                     //Creamos previous y le asignamos el valor de null
                                
  while(current.next){                    //Mientras current.next apunte a algo...
    previous = current;                   //Ahora current es el nodo previo
    current = current.next                //Y current.next es el nuevo valor de current
  }                                       // --- Avanza hasta el ultimo nodo recordando el nodo anterior ---

  if(!previous){                          //Si el primer nodo es el único de la lista...
    this.head = null;                     //La cabeza de la lista (this.head) apunta a null
  } else {                                //Si hay más de un nodo en la lista...
    previous.next = null;                 //El nodo siguiente de previous (el último) ahora apunta null
  }

  this._length--
  return current.value;                   //Retorna el valor del nodo eliminado
};

LinkedList.prototype.search = function(value){

  let current =  this.head                //Establece el valor de current apuntando a la cabeza de la lista
                                          // ---> Caso: value es un valor directo
  if(typeof value !== 'function'){        //Si el valor pasado por parámetro NO ES UNA FUNCIÓN, Ejecuta lo siguiente...
    while(current){                       //Mientras current (this.head) apunte a algo pregunta lo siguiente...
      if(current.value === value){        //Pregunta si el valor de current (this.head) es igual === al valor pasado por parámetro...
        return current.value              //Si es así retorna el valor (coincidencia)
      }
      current = current.next              //Si no hay coincidencia asigna a current el valor del siguiente nodo (current.next)
    }
                                          // ---> Caso: value es una función de callback
  } else {                                //Si el valor pasado por parámetro ES UNA FUNCIÓN, Ejecuta lo siguiente...
    while(current){                       //Mientra current (this.head) apunte a algo, preguntamos...
      if(value(current.value)){           //Si el valor pasado por parámetro (que es una función callback a la que pasamos por parámetro el valor de cada nodo: value(current.value)) resulta 'true'
        return current.value              //Entonces retorma dicho valor
      }
      current = current.next              //Si no, prueba con el siguiente...
    }
  }
  return null; // Retorna null si no se encuentra el valor o no se cumple el callback
};

LinkedList.prototype.size = function(){
  return this._length                     //Retorna el número de elementos que tiene la lista.
}

// Test

const miListaEnlazada = new LinkedList()
console.log(miListaEnlazada.size())

// acciones:

// add
miListaEnlazada.add(1)
miListaEnlazada.add(2)
miListaEnlazada.add(3)
miListaEnlazada.add(4)
miListaEnlazada.add(5)
miListaEnlazada.add(6)
miListaEnlazada.add(7)
miListaEnlazada.add(8)
miListaEnlazada.add(9)

// remove
miListaEnlazada.remove()
miListaEnlazada.remove()
miListaEnlazada.remove()
miListaEnlazada.remove()

// search
console.log(miListaEnlazada.search(1))
console.log(miListaEnlazada.search(2))
console.log(miListaEnlazada.search(3))
console.log(miListaEnlazada.search(4))
console.log(miListaEnlazada.search(5))

// size
console.log(miListaEnlazada.size())
console.log(miListaEnlazada)


/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.buckets = []                                           //Creamos los buckets donde se almacenarán los datos en la tabla
  this.numBuckets = 35                                        //Asignamos un número de espacios en nuestra tabla (35 en este caso)
}

HashTable.prototype.hash = function(key){                                 // *** HASH ***
  let hash = 0                                                            //hash vale 0
  for(let i=0; i < key.length; i++){                                      //Recorre 'key' en toda su longitud pasando por cada uno de sus índices.
    hash += key.charCodeAt(i)                                             //En cada índice suma a hash (inicialmente 0) el valor numérico del caracter situado en dicho índice.
  }                                                                       //Después de esto hash debería tener un valor resultante de la suma de los valores en todos los índices.
  return hash % this.numBuckets                                           //Retorna el módulo (resto) de hash entre el número de buckets de la tabla hash (en este caso 35).
}

HashTable.prototype.set = function(key,value){                                    // -- SET --
  if(typeof key !== 'string') throw new TypeError('Keys must be strings')         //Verifica si la 'key' es de tipo 'string'. Si no, da un error de tipo (TypeError)
  let position = this.hash(key)                                                   //Establece que 'position' equivale al resultado de la 'key' pasada por la función 'hash'
  if(!this.buckets[position]) this.buckets[position] = {};                        //Corto circuito -> verifica si la posición obtenida (position) en la tabla hash aún no tiene un valor asignado. Si no tiene valor (es undefined o null), se crea un objeto vacío en esa posición ({}) para almacenar los pares clave-valor. Esto asegura que cada posición tenga una estructura donde se pueda almacenar información.
  this.buckets[position][key] = value                                             //Asigna el valor (value) a la clave (key) en la posición específica de la tabla hash. Esto crea o actualiza el par clave-valor en la tabla hash en la posición indicada por la función de hash para esa clave.
}

HashTable.prototype.get = function(key){                                        // -- GET --
  var position = this.hash(key)                                                 //Establece que 'position' equivale al resultado de la 'key' pasada por la función 'hash'
  if(this.buckets[position][key]) return this.buckets[position][key]            //Verifica si 'this.buckets[position][key]' existe. Si existe lo retorna
  return false                                                                  //Si no existe retorna false
}

HashTable.prototype.hasKey = function(key){                               // -- HASKEY --
  var position = this.hash(key)                                           //Establece que 'position' equivale al resultado de la 'key' pasada por la función 'hash'
  if(this.buckets[position][key]) return true                             //Verifica si 'this.buckets[position][key]' existe. Si existe retorna true
  return false                                                            //Si no existe retorna false
}

// Test
const miTablaHash = new HashTable()
console.log(miTablaHash)

// acciones:
miTablaHash.set('0001', ['Domenico Pagano', 1986])
miTablaHash.set('0002', ['Graciela Valderrama', 1987])
miTablaHash.set('0003', ['Gia Perrito', 2016])
miTablaHash.set('0821', ['Jesus Cristo', 0])
miTablaHash.set('9999', ['Apocalipsis Tomorrow', 7030])

console.log(miTablaHash.get('0001'))
console.log(miTablaHash.get('0002'))
console.log(miTablaHash.get('9999'))

console.log(miTablaHash.hasKey('0001'))
console.log(miTablaHash.hasKey('0002'))
console.log(miTablaHash.hasKey('0003'))

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
