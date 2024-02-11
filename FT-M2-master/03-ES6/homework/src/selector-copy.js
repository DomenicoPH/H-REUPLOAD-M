var traverseDomAndCollectElements = function (matchFunc, startEl = document.body) {
  var resultSet = [];

  if(matchFunc(startEl)) resultSet.push(startEl)
  for(let i=0; i < startEl.children.length; i++){
    let result = traverseDomAndCollectElements(matchFunc,startEl.children[i])
    resultSet = [...resultSet, ...result]
  }
  return resultSet
};

var selectorTypeMatcher = function (selector) {

  if(selector[0] === '#') return 'id';
  else if(selector[0] === '.') return 'class';

  if(selector.includes('.')) return 'tag.class';
  return 'tag';
};

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);   // 'id', 'class', 'tag', 'tag.class'
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function(elem){
      return '#' + elem.id === selector   // --> booleano
    }
  } else if (selectorType === "class") {
    matchFunction = function(elem){
      for(let i=0; i < elem.classList.length; i++){
        if('.' + elem.classList[i] === selector) return true        // --> booleano
      }
      return false          // --> booleano
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(elem){
      let [t,c] = selector.split('.')   // t=tag, c=class
      return matchFunctionMaker(t)(elem) && matchFunctionMaker(`.${c}`)(elem)   // --> booleano
    }
  } else if (selectorType === "tag") {
    matchFunction = function(elem){
      return elem.tagName.toLowerCase() === selector.toLowerCase()    // --> booleano
    }
  }
  return matchFunction;   // function
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector); // function
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

/*
    Este código JavaScript proporciona una implementación básica de un selector de elementos similar a jQuery. 
    Aquí tienes una explicación detallada de cada parte del código:

    ► traverseDomAndCollectElements: 
    Esta función recorre el DOM comenzando desde el elemento especificado (o el elemento document.body si no 
    se proporciona ningún elemento inicial) y recopila todos los elementos que coinciden con una función de 
    coincidencia dada (matchFunc). Devuelve un array de elementos que coinciden.

    ► selectorTypeMatcher: 
    Esta función determina el tipo de selector proporcionado (ID, clase, etiqueta o combinación de etiqueta 
    y clase) y devuelve una cadena que representa el tipo de selector.

    ► matchFunctionMaker: 
    Esta función genera una función de coincidencia personalizada para un selector dado. Dependiendo del tipo 
    de selector, crea y devuelve una función de coincidencia específica que evalúa si un elemento dado coincide 
    con el selector proporcionado.

    ► $: 
    Esta función es similar a la función $ en jQuery. Toma un selector CSS como entrada, utiliza matchFunctionMaker 
    para generar una función de coincidencia correspondiente y luego utiliza traverseDomAndCollectElements para 
    recopilar todos los elementos que coinciden con el selector.

    En resumen, este código proporciona una forma básica de seleccionar elementos del DOM usando selectores CSS 
    similares a los de jQuery, pero con una funcionalidad más limitada.
*/