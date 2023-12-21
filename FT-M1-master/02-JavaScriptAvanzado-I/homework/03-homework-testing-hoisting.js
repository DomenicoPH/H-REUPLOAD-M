// 3. hoisting

// ------------------------------------------------------------------------> 3.1
function test() {
   console.log(a);  //undefined
   console.log(foo());  //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

// ------------------------------------------------------------------------> 3.2
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

console.log(getFood(false));
console.log(getFood(true));