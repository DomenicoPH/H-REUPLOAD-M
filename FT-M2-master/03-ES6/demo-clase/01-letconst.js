// Let y Const

//---------------------------------------------------------------------------------

//var variableConVar = 'variableConVar';
//let variableConLet = 'variableConLet';
//const variableConConst = 'variableConConst';

{
    var variableConVar = 'variableConVar';
    let variableConLet = 'variableConLet';
    const variableConConst = 'variableConConst';

    console.log(variableConLet)
    {
        console.log(variableConConst)
    }
}

console.log(variableConVar)
// console.log(variableConLet)      //ERROR
// console.log(variableConConst)    //ERROR

/*
    variables declaradas con VAR --> Tienen alcance de CONTEXTO DE EJECUCION
    variables declaradas con LET y CONST --> Tienen alcance de LLAVES
*/

//---------------------------------------------------------------------------------

const nombreConst = 'Jorge'
//nombreConst = 'Lucas'  //ERROR

console.log(nombreConst)

const miArr = []
console.log(miArr)
miArr.push(9)
console.log(miArr)

// No se puede modificar el valor de las variables declaradas con CONST

let nombreLet = 'Jorge'
console.log(nombreLet)
nombreLet = 'Pepe'
console.log(nombreLet)

// Con let y var si es posible

//var
var nomVar = 'Domo'
console.log(nomVar)
var nomVar = 'Mono'
console.log(nomVar)

//let
let nomLet = 'Pepo'
console.log(nomLet)
//let nomLet = 'Memo'   //Error
nomLet = 'Memo'
console.log(nomLet)

//---------------------------------------------------------------------------------

// Devuelve pares

function devuelvePares(arr){
    
    /**/console.log(arr)
    /**/console.log(pares)
    /**/console.log(i)
    /**/console.log(num)

    var pares = []

    /**/console.log(arr)
    /**/console.log(pares)
    /**/console.log(i)
    /**/console.log(num)

    for(var i=0; i < arr.length; i++){
        var num = arr[i]
        if(num % 2 === 0) pares.push(arr[i])
    }

    /**/console.log(arr)
    /**/console.log(pares)
    /**/console.log(i)
    /**/console.log(num)

return pares
}

console.log(devuelvePares([1,2,3,4,5,6,7,8,9,10]))

//  Variables involucradas: arr, pares, i, num

function devuelveParesLetConst(arr){
    
    /**/console.log(arr)
    const pares = []

    for(let i=0; i < arr.length; i++){
        const num = arr[i]
        if(num % 2 === 0) pares.push(arr[i])
    }

return pares
}

console.log(devuelveParesLetConst([1,2,3,4,5,6,7,8,9,10]))