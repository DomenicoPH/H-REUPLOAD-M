const { createStore } = require("redux");

// Action Types:
const AUMENTAR_CONTADOR = 'AUMENTAR_CONTADOR';
const DECREMENTAR_CONTADOR = 'DECREMENTAR_CONTADOR';
const CAMBIAR_NOMBRE = 'CAMBIAR_NOMBRE';
const AGREGAR_NUMEROS = 'AGREGAR_NUMEROS';
// --------------------------------------------------

// Estado inicial:
const initialState = {
    count: 0,
    name: 'Domenico',
    numeros: [1,2,3],
}
// --------------------

// Reducer:
const reducer = (state = initialState,action) => {
    switch(action.type){
        case AUMENTAR_CONTADOR:
            return {...state, count: state.count + 1};
        case DECREMENTAR_CONTADOR:
            return {...state, count: state.count - 1};
        case CAMBIAR_NOMBRE:
            return {...state, name: action.payload};
        case AGREGAR_NUMEROS:
            return {...state, numeros:[...state.numeros, action.payload]};
        default:
            return { ...state };
    }
}
// ------------------------------------------------------------------------

// Store:
const store = createStore(reducer);
// --------------------------------

/* 
store.dispatch({ type: "AUMENTAR_CONTADOR" });   // 0 + 1 = 1
store.dispatch({ type: "AUMENTAR_CONTADOR" });   // 1 + 1 = 2
store.dispatch({ type: "AUMENTAR_CONTADOR" });   // 2 + 1 = 3
console.log(store.getState()); 
*/

// printState - Imprime el estado actual en consola:
const printState = () => {
    console.log(store.getState())
}; //Función 'printState' - Imprime en consola el cambio de estado
store.subscribe(printState);    //'printState' suscrita al 'store'

// Action Creators:
const aumentarContador = () => {
    return{ type: AUMENTAR_CONTADOR }
};

//Actions
console.log('Actions:')
store.dispatch({ type: AUMENTAR_CONTADOR });
store.dispatch({ type: DECREMENTAR_CONTADOR });
store.dispatch({ type: CAMBIAR_NOMBRE, payload: 'Graciela' });
store.dispatch({ type: AGREGAR_NUMEROS, payload: 6 });
store.dispatch(aumentarContador())
store.dispatch(aumentarContador())
