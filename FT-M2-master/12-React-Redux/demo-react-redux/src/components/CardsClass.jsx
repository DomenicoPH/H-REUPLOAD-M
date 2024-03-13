import React from "react";
import Card from './Card'
import '../App.css'
import { connect } from "react-redux";
import { getCharacters } from "../redux/actions";

class CardsClass extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getCharacters();
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

// mapStateToProps -> Trae el estado de redux y lo asigna al componente como prop.
const mapStateToProps = (state) => {
    return{
        characters: state.characters,
    }
};

// mapDispatchToProps -> 
const mapDispatchToProps = (dispatch) => {
    return{
        getCharacters: () => {
            dispatch(getCharacters())
        }
    }
}

//export default CardsClass;
export default connect(mapStateToProps, mapDispatchToProps)(CardsClass)