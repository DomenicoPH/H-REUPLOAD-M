import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */

  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: []
  })

  const handleInputChange = (event) => {
    setZoo({
      ...zoo,
      zooName: event.target.value
    })
  }

  const handleSpecies = (event) => {
    console.log(event.target.value)
    setZoo({
      ...zoo,
      animals: zoo.allAnimals.filter(
        animal => animal.specie === event.target.value
      )
    })
  }

  const handleAllSpecies = (event) => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals
    })
  }

  React.useEffect(() => { // Hace solicitud a la API y llena el estado con la información que se trae.
    fetch('http://localhost:3001/zoo')
    .then((res) => res.json())
    .then((data) =>
       setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
       })
    )
    .catch((error) => console.log(error));
  },[])

  return (
    <div className={styledZoo.divContentTitle}>
        <label htmlFor="zooName">Zoo Name:</label>
        <input type="text" id="zooName" value={zoo.zooName} onChange={handleInputChange}/>
        <h1 className={styledZoo.title}>{zoo.zooName}</h1>
      <Species 
        species={zoo.species} 
        handleSpecies={handleSpecies} 
        handleAllSpecies={handleAllSpecies}
      />
      <Animals 
        animals={zoo.animals} 
      />
    </div>
  );
}
