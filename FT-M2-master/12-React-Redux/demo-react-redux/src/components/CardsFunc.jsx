import React from "react";
import Card from './Card';
import { useSelector } from "react-redux";
import '../App.css'

const CardsFunc = () => {

    const characters = useSelector((state) => state.characters);

    return(
        <div className="cardsFuncContainer">
            <h1>Cards Funcional</h1>
            <div>
                {characters.map((char) => {
                    return(
                        <Card
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
                    )
                })}
            </div>
        </div>
    )
}

export default CardsFunc;