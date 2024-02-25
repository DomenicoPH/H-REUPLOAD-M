import React from "react";
//import style from './Cards.module.css'
import styled from 'styled-components'

const Titulo = styled.h1`
    color: red;
    font-size: 3rem;
    border-bottom: 1px solid red;
    padding-bottom: 5px
`;
const Contenedor = styled.div`
    background-color: rgb(40,40,40);
    border: 1px solid red;
    margin-top: 10px;
    padding: 25px;
`;
const Texto1 = styled.p`
    font-family: arial;
    font-size: 1rem;
    font-style: italic;
    color: lightblue;
    letter-spacing: .5rem
`;

const Cards = () => {
    
    return (
        <Contenedor>
            <Titulo>Estas son las CARDS</Titulo>
            <Texto1>Texto 1</Texto1>
        </Contenedor>
    )
}

export default Cards;