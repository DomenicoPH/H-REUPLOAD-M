// Action Types
export const GET_CHARACTERS = 'GET_CHARACTERS'
export const ADD_CHARACTER = 'ADD_CHARACTER'
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER'

// Action Creators
export const getCharacters = () => {
    return function(dispatch){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((data) => dispatch({ type: GET_CHARACTERS, payload: data }))
    }
}