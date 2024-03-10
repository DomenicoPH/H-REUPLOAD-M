import React from "react";
import Card from './Card'
import '../App.css'

import { connect } from "react-redux";

class CardsClass extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="cardsClassContainer">
                <h1>Cards Class</h1>
                <div>
                    {this.props.characters.map(char => {
                        return <Card 
                            key={char.id}
                            id={char.id} 
                            name={char.name} 
                            username={char.username}
                            email={char.email}
                            address={char.address}
                            phone={char.phone}
                            website={char.website}
                            company={char.company}
                        />
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        characters: state.characters,
    }
};

//export default CardsClass;
export default connect(mapStateToProps, null)(CardsClass)