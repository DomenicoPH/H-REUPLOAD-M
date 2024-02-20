const URL = 'http://localhost:5000/amigos'          //captura la URL
const img = $('img')                                //captura el elemento de tipo imagen    --  <img>
const lista = $('#lista')                           //captura el elemento con id='lista'    --  <ul>
const boton = $('#boton')                           //captura el elemento con id='boton'    --  <button>

img.hide()  // esconde la imagen

const listaAmigos = (info) => {
    //console.log(info)
    info.forEach((amigo) => {
        //console.log(`${amigo.name} - ${amigo.email}`)
        lista.append(`<li>${amigo.id} - ${amigo.name} - ${amigo.email}</li>`)       
    })
    img.hide()                  //oculta la imagen (img)
}

const obtenerAmigos = () => {
    img.show()                  //muestra la imagen (img)
    lista.empty();              //vacía la lista
    $.get(URL, listaAmigos)
}

// FUNCIÓN click
boton.click(obtenerAmigos)

//----------------------------------- ----------------------------------- -----------------------------------

const search = $('#search')     //captura el elemento con id='search'   --  <button>
const input = $('#input')       //captura el elemento con id='input'    --  <input>
const friend = $('#amigo')      //captura el elemento con id='amigo'    --  <span>

// FUNCIÓN que limpia el input.
const cleanInputs = () => {
    input.val('')               //limpia el input
    input.focus()               //enfoca el cursor en el input
}

// FUNCIÓN que trae el nombre del amigo.
const nameFriend = (info) => {
    //console.log(info)
    friend.text(info.name)                                              //llena el <span> 'friend' con el nombre del amigo correspondiente al id.
}

// FUNCIÓN que entrega mensaje de error.
const friendNotFound = () => {
    friend.text(`${input.val()} No existe`)                             //llena el <span> 'friend' con el texto 'id No existe'.
}

// FUNCIÓN que muestra el amigo solicitado.
const showFriend = () => {
    let id = input.val()                                                //id = lo que se escriba en el input (números).
    if(!id) return friend.text('No hay un id que buscar')               //si no hay id que buscar (input vacio) entrega mensaje.
    //console.log(id)
    $.get(`${URL}/${id}`, nameFriend).fail(friendNotFound())            //trae amigo o mensaje de error.
    cleanInputs()                                                       //limpia inpit && foco en el input.
}

// FUNCIÓN click
search.click(showFriend)

//----------------------------------- ----------------------------------- -----------------------------------

//continúa en DELETE - 1:08:00