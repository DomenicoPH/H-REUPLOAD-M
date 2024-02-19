const URL = 'http://localhost:5000/amigos'
const lista = document.querySelector('#lista')
const verAmigosButton = document.querySelector('#boton')

const crearAmigo = (amigo) => {
    let li = document.createElement('li')
    li.innerHTML = `${amigo.name} - ${amigo.age} | mail: ${amigo.email}`
    lista.appendChild(li)
}

const mostrarAmigos = (amigos) => {
    amigos.forEach(crearAmigo)
}

verAmigosButton.addEventListener('click', mostrarAmigos)