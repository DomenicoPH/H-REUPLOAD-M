import React from "react";
import Card from './Card';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharacters } from "../redux/actions";
import '../App.css'

const CardsFunc = () => {

    const characters = useSelector((state) => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacters())
    },[])

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