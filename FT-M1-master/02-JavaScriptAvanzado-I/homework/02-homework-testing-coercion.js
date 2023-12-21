// 2. coerción de datos

// ------------------------------------------------------------------------> 2.1

6 / "3" //2
    console.log(6 / "3")
    console.log("6" / 3)
    console.log("6" / "3")
    console.log("6" / "j")
    /* JS les asigna el tipo de dato Number
    y ejecuta la operación. Hace esto hasta
    que alguno de los operandos pierda su
    condición de número. */

"2" * "3" //6
    console.log("2" * "3")
    /* Igual que el anterior */

4 + 5 + "px" //9px
    console.log(4 + 5 + "px")
    console.log("px" + 4 + 5)
    /* Ejecuta la operación con los datos
    de tipo Number y concatena con la cadena
    de texto. Si la operación comienza con
    una cadena de texto la lógica de toda la
    operación será la concatenación. */

"$" + 4 + 5
    console.log("$" + 4 + 5)
    /* Igual que el anterior */

"4" - 2
    console.log("4" - 2)
    /* JS no puede restarle 2 a un string.
    Pero parece comprender que al 4 dentro
    del string si se le puede restar 2 si
    se le transforma a Number. */

"4px" - 2
    console.log("4px" - 2)
    /* No puede hacer la resta. Devuelve
    NaN: Not a Number. */

7 / 0
    console.log(7 / 0)

{}[0]
    console.log({}[0])

parseInt("09")
    console.log(parseInt("09"))

5 && 2
    console.log(5 && 2)
    console.log(2 && 5)
    console.log(3 && 7 && 5 && 1)
    console.log(3 && 7 && 0 && 1)
    console.log(3 && 0 && 5 && 1)
    console.log(0 && 7 && 5 && 1)
    console.log(true && true)
    console.log(true && true && true)
    console.log(false && true)
    console.log(true && 0 && true)
    console.log(false && 0 && true)
    /* El operador lógico && en JavaScript 
    realiza una operación booleana de "Y" (AND). 
    Retorna el primer valor si este es evaluado 
    como falso (false, 0, "", null, undefined, 
    NaN); de lo contrario, retorna el segundo 
    valor.

    ** Devuelve el primer 'false' que se encuentre
    o el último elemento si todos los valores 
    con los que se encuentra en su recorrido 
    son 'true' */

2 && 5
    console.log(2 && 5)
    /* Igual que el anterior */

5 || 0
    console.log(5 || 0)
    console.log(0 || 5)
    console.log(0 || 0)
    console.log(0 || false)
    console.log(false || 0)
    console.log(1 || true || 'this is it' || 1000)
    console.log(1000 || true || 'this is it' || 1)
    console.log(0 || false || 0 || false || 0 || 10 > 100)
    console.log(0 || false || 0 || false || 0 || 1000 > 100)
    console.log(false || '' || false || 0 || false || 0)
    console.log(0 || 'yes' || false || 0 || false || 0)
    /* El operador lógico || en JavaScript 
    realiza una operación booleana de "O" (OR). 
    Retorna el primer valor si este es evaluado 
    como verdadero (true) y, si ambos valores 
    son evaluados como falsos, devuelve el 
    segundo valor.
    
    ** Devuelve el primer 'true' que se encuentre
    o el último elemento si todos los valores
    con los que se encuentra en su recorrido
    son 'false' */

0 || 5
    console.log(0 || 5)
    /* Igual que el anterior */

//[3]+[3]-[10]
    console.log([3]+[3]-[10])
    console.log([3]+['j']-['k'])
    console.log([3]+[3]+[3])
    console.log('3'+'3'+'3')
    console.log(3 + 3 + 3)
    /* Al sumar concatena. Al restar resta */

//3>2>1
    console.log(3>2>1)
    /* La expresión se evalúa de izquierda 
    a derecha. Primero se evalúa 3 > 2, que 
    es true. Luego, se compara true > 1. 
    
    3 > 2 > 1
    ( 3 > 2 ) = true > 1
    ( true > 1 ) = false */
    
//[] == ![]
    console.log([] == ![])
    /* ![] es false, ya que cualquier tipo de
    dato es true y su negación es false.
    Por consiguiente [] es true.
    Al intentar compararlos JS los transforma
    e un mismo tipo de dato: 0 == 0 (un array
    vacío es 0 y false es 0), lo que da como
    resultado 'true' 
    
    [] == false
    [] == 0
    '' == 0
     0 == 0 -> true
    */
    
     console.log([] == ![])
     //console.log([] === ![]) //false


// https://es.javascript.info/object-toprimitive