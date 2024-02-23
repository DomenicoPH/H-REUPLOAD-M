import React from "react";
import PersonaItem from "../PersonaItem/PersonaItem"

const ListaPersonasFuncional = ({lista}) => {
    return (
        <div>

        <h2>Este es un COMPONENTE FUNCIONAL</h2>
        <hr />

        <div>
          {lista.map((persona) => {
            return <PersonaItem name={persona.name} age={persona.age} />
          })}
        </div>

        {/* Hardcoded 2
        
        <PersonaItem name="Domenico Pagano" age={38}/>
        <PersonaItem name="Graciela Valderrama" age={37}/>
        <PersonaItem name="Gia Perrito" age={38}/>
        <PersonaItem name="Fito Plancton" age={5}/>
        <PersonaItem name="La momia" age={800}/> */}

        {/* Hardcoded 1
        
        <div>
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

export default ListaPersonasFuncional;