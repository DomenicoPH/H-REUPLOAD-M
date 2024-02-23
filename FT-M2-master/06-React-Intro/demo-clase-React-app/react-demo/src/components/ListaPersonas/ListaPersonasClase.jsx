import React from "react";
import PersonaItemClase from "../PersonaItem/PersonaItemClase";

class ListaPersonasClase extends React.Component {
    /* constructor(){

    } */
    render(){
        return (
            <div>

                <h2>Este es un COMPONENTE DE CLASE</h2>
                <hr />

                <PersonaItemClase name="Domenico Pagano" age={38}/>
                <PersonaItemClase name="Graciela Valderrama" age={37}/>
                <PersonaItemClase name="Gia Perrito" age={6}/>
                <PersonaItemClase name="Fito Plancton" age={5}/>
                <PersonaItemClase name="La momia" age={800}/>


              {/* <div>
                <p>Nombre: Domenico Pagano</p>
                <p>Edad: 38 años</p>
                <hr />
              </div>

              <div>
                <p>Nombre: Graciela Valderrama</p>
                <p>Edad: 37 años</p>
                <hr />
              </div>

              <div>
                <p>Nombre: Gia Perrón</p>
                <p>Edad: 6 años</p>
                <hr />
              </div> */}

            </div>
        )
    }
}

export default ListaPersonasClase;