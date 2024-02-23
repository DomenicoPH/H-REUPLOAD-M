import React from "react";

const PersonaItem = (props) => {
    return (
        <div>
          <p>Nombre: {props.name}</p>
          <p>Edad: {props.age} años</p>
          <hr />
        </div>
    )
};

export default PersonaItem