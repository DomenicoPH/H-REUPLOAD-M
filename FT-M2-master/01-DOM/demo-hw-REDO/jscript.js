const toDoItems = []        // Declaración de una variable global que contendrá los elementos de la lista de To-Do.

document.querySelector('#createdBy').innerHTML += ' Domenico'       // Modificación del texto dentro del elemento con id 'createdBy' para agregar el nombre 'Domenico'.

function ToDo(description){             // Definición del constructor de objetos ToDo.
    this.description = description      // Propiedad que almacena la descripción de la tarea.
    this.complete = false               // Propiedad que indica si la tarea está completada o no. (se inicia en 'false')
}

ToDo.prototype.completeToDo = function(){   // Método del prototipo de ToDo que cambia el estado de la tarea de completada a no completada, o viceversa.
    this.complete = !this.complete
}

function buildToDo(todo,index){                             // Función que construye el elemento visual de una tarea ToDo en el DOM.
    const toDoShell = document.createElement('div')         // Creación de un nuevo elemento div para encapsular la tarea ToDo.
    toDoShell.className = 'toDoShell'                       // Asignación de una clase CSS al div creado para darle estilo.
    const toDoText = document.createElement('span')         // Creación de un elemento span para mostrar el texto de la tarea.
    toDoText.innerHTML = todo.description                   // Asignación del texto de la tarea al elemento span.
    toDoText.id = index                                     // Asignación de un identificador único al elemento span, que será el índice de la tarea en el arreglo toDoItems.
    toDoText.addEventListener('click',completeToDo)         // Agregado de un evento de clic al elemento span para marcar la tarea como completada o no completada.
    if(todo.complete) toDoText.className = 'completeText'   // Si la tarea está marcada como completada, se le asigna una clase CSS adicional para darle estilo.
    toDoShell.appendChild(toDoText)                         // Se añade el elemento span al div que encapsula la tarea.
    return toDoShell                                        // Se retorna el div creado.
}

function buildToDos(toDos){         // Función que construye un arreglo de elementos visuales de tareas ToDo en el DOM.
    return toDos.map(buildToDo)     // Se utiliza el método map para aplicar la función buildToDo a cada tarea del arreglo toDos.
}

function displayToDos(){                                            // Función que muestra las tareas ToDo en el DOM.
    toDoContainer = document.getElementById('toDoContainer')        // Se obtiene el contenedor de las tareas ToDo en el DOM.
    toDoContainer.innerHTML = ''                                    // Se vacía el contenedor para evitar duplicados.
    let result = buildToDos(toDoItems)                              // Se construye un arreglo de elementos visuales de tareas ToDo y se añaden al contenedor.
    result.forEach(element => {
        toDoContainer.appendChild(element)
    })
}

function addToDo(){                                         // Función que se ejecuta al agregar una nueva tarea ToDo.
    const input = document.getElementById('toDoInput')      // Se obtiene el elemento de entrada de texto.
    if(input.value){                                        // Se verifica si el campo de entrada no está vacío.
        const newToDo = new ToDo(input.value)               // Se crea una nueva tarea ToDo con la descripción ingresada.
        toDoItems.push(newToDo)                             // Se agrega la nueva tarea al arreglo toDoItems.
        displayToDos()                                      // Se actualiza la visualización de las tareas ToDo en el DOM.
        input.value = ''                                    // Se limpia el campo de entrada.
    } else {
        alert('ingresa una tarea')                          // Si el campo de entrada está vacío, se muestra una alerta.
    }
}

document.querySelector('#addButton').addEventListener('click',addToDo)      // Se añade un evento de clic al botón de agregar tarea para ejecutar la función addToDo.

function completeToDo(event){               // Función que se ejecuta al hacer clic en una tarea ToDo para marcarla como completada o no completada.
    const index = event.target.id           // Se obtiene el índice de la tarea en el arreglo toDoItems a partir del identificador del elemento clickeado.
    toDoItems[index].completeToDo()         // Se cambia el estado de completitud de la tarea correspondiente.
    displayToDos()                          // Se actualiza la visualización de las tareas ToDo en el DOM.
}

displayToDos()          // Se muestra la lista inicial de tareas ToDo al cargar la página.