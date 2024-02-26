import { useState, useRef } from "react"
import style from './SearchBar.module.css'

const SearchBar = (props) => {

    const [id, setId] = useState('')
    const inputRef = useRef(null)

    const handleChange = (event) => {
        setId(event.target.value)
    }

    const cleanInput = () => {
        setId('')
        inputRef.current.focus()
    }

    return (
        <div className={style.container}>
            <input 
                ref={inputRef}
                className={style.input} 
                type="text" 
                value={id} 
                onChange={handleChange} 
            />

            <button className={style.boton} onClick={() => {
                props.onSearch(id)
                cleanInput()
                }}
            >
                Buscar
            </button>
        </div>
    )
}
export default SearchBar;