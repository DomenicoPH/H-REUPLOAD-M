var traverseDomAndCollectElements = function (matchFunc, startEl = document.body) {
  var resultSet = [];

/*   if (typeof startEl === "undefined") {
    startEl = document.body;
  } */

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  if(matchFunc(startEl)) resultSet.push(startEl)
  for(let i=0; i < startEl.children.length; i++){
    let result = traverseDomAndCollectElements(matchFunc,startEl.children[i])
    resultSet = [...resultSet, ...result]
  }
  return resultSet
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if(selector[0] === '.') return 'class'
  else if(selector[0] === '#') return 'id'

    // opción 1:
  /* for(let i=0; i < selector.length; i++){
    if(selector[i] === '.') return 'tag-class'
  } */
    // opción 2:
  //else if(selector.split('.').length === 2) return 'tag.class'
    // opción 3:
  //else if(selector.includes('.')) return 'tag.class'

  else if(selector.includes('.')) return 'tag.class'
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);   // 'id', 'class', 'tag', 'tag.class'
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function(elem){
      return '#' + elem.id === selector
    }
  } else if (selectorType === "class") {
    matchFunction = function(elem){
      for(let i=0; i < elem.classList.length; i++){
        if(elem.classList[i] === selector) return true
      }
      return false
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(elem){
      let [t,c] = selector.split('.')   // t=tag, c=class
      return matchFunction(t)(elem) && matchFunction(c)(elem)   // --> booleano
    }
  } else if (selectorType === "tag") {
    matchFunction = function(elem){
      return elem.tagName.toLowerCase() === selector.toLowerCase    // --> booleano
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

// $('.photos') /* Es igual a */ document.querySelectorAll('.photos')