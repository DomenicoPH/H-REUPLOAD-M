/*  
REDUCER
Contiene:
♦ Imports: 
♦ Estado inicial
♦ Reducer (función)
*/

import { GET_CHARACTERS, ADD_CHARACTER, REMOVE_CHARACTER } from "./actions";
/*  Ejemplos:
    { type: ADD_CHARACTER, payload: {} }
    { type: REMOVE_CHARACTER, payload: 5 }

*/

const initialState = {
    characters: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CHARACTERS:
            return { ...state, characters: action.payload };
        case ADD_CHARACTER:
            return { ...state, characters: [ ...state.characters, action.payload ] }
        case REMOVE_CHARACTER:
            return { ...state, characters: state.characters.filter((char) => char.id !== action.payload) }
        default:
            return { ...state }
    }
}

export default reducer;