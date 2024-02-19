// Hacer a jsonplaceholder (https://jsonplaceholder.typicode.com/) una petición de tipo GET a /users.
// Recibir información de usuarios dentro de un array.
// Mostrar esta información armando na lista de NOMBRES de los usuarios.

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const URL_BASE = 'https://jsonplaceholder.typicode.com'
const listaUsuarios = document.querySelector('#listaUsuarios')

//función que crea la lista de usuarios
const createListItems = (user) => { 
    const li = document.createElement('li')
    li.innerHTML = `${user.name} --- ${user.email}`
    listaUsuarios.appendChild(li)
}

//función que muestra la lista de usuarios
const showUsers = (users) => {
    console.log(users)
    users.forEach(createListItems)
}

//petición asíncrona
$.get(`${URL_BASE}/users`, showUsers)


//sintaxis de borrado
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/users/1',
    type: 'DELETE',
    success: () => {}
})

/* jquery
const listaUsuarios = $('#listaUsuarios')[0]
listaUsuarios.append(li)
*/