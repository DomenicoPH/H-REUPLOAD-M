// 4. this

// ------------------------------------------------------------------------> 4.1
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa

var test = obj.prop.getFullname;
console.log(test()); //undefined

    /* var test = obj.prop.getFullname
       var test = function(){
            return this.fullname
       } 
       
        ---> 'En este caso this no está
        apuntando a nada' <---
    */
   
var test2 = obj.prop.getFullname();
console.log(test2); //Aurelio De Rosa

    /* var test2 = obj.prop.getFullname
       var test2 = 'Aurelio De Rosa'

        ---> 'En este caso lo que retorna
        es el resultado de la ejecución del
        método 'getFullname' en su propio
        contexto' <---
    */