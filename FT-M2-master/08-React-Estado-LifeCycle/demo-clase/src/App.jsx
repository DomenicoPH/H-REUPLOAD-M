import './App.css'
import EstadosClase from './components/EstadosClase'
import Cards from './components/Cards'
import SearchBar from './components/SearchBar'
import { useState } from 'react'

function App() {

  const [ users, setUsers ] = useState([]);

  const searchUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res =>  res.json())
    .then(data => setUsers([...users,data]));
  }

  return (
    <>
      {/* <EstadosClase /> */}

      <h1>Users</h1>
      <hr />
      <SearchBar onSearch={searchUser} />
      <Cards users={users} /> 
    </>
  )

}

export default App
