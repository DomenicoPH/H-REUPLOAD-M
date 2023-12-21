// 1. scope & hoisting

// ------------------------------------------------------------------------> 1.1
x = 1;  // No está declarada
var a = 5;  // var a = 5 (global)
var b = 10; // var b = 10 (global)
var c = function (a, b, c) {    // var c = función
   var x = 10; // var x = 10 (local)
   console.log(x); // x -> 10
   console.log(a); // a -> 8
   var f = function (a, b, c) {
      b = a;
      console.log(b); // b = 8
      b = c;
      var x = 5; // nunca es llamada
   };
   f(a, b, c); // c
   console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1



// ------------------------------------------------------------------------> 1.2
console.log(bar); // undefined
//console.log(baz); // error | no ha sido declarada
foo(); // Hola!
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;

   /*
      El hoisting en el caso de las variables declaradas
      con var funciona de la siguiente manera:
      Cuando se llama console.log(bar); antes de que bar sea asignada, 
      el motor de JavaScript reconoce la variable bar debido al 
      hoisting de la declaración de var bar;, pero aún no tiene 
      un valor asignado, por lo que muestra undefined.
   */


// ------------------------------------------------------------------------> 1.3
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);


   /*
      En este caso la variable instructor se actualiza.
      si en vez de 'true' el if llevara un 'false' el
      valor de 'instructor' no se actualizaría.
   */


// ------------------------------------------------------------------------> 1.4
var instructor = 'Tony';
console.log(instructor);   // instructor = Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);   // dentro de la función: instructor = Franco
   }
})(); // Función que se declara y se ejecuta al mismo tiempo
console.log(instructor);   // instructor = Tony



// ------------------------------------------------------------------------> 1.5
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);   //The Flash
   console.log(pm);  //Reverse Flash
}
console.log(instructor);   //The Flash
console.log(pm);  //Franco

