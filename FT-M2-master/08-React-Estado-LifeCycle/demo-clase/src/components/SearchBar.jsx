import { useState } from "react"

const SearchBar = (props) => {

    const [id, setId] = useState('')

    const handleChange = (event) => {
        setId(event.target.value)
    }

    return (
        <div className="container">
            <input type="text" onChange={handleChange} />
            <button onClick={() => {props.onSearch(id)}}>Buscar</button>
        </div>
    )
}
export default SearchBar;