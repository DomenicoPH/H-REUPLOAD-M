import React from "react";

class PersonaItemClase extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
              <p>Nombre: {this.props.name}</p>
              <p>Edad: {this.props.age} años</p>
              <hr />
            </div>
        )
    }
}

export default PersonaItemClase;