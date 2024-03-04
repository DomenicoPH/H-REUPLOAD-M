import React, { useState } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value
    setInputs({...inputs, [property]: value})
  }

  return <div>
    <form>
      
      <label>Nombre:</label>
      <input 
        name='name'
        placeholder='Escribe tu nombre...'
        type="text"
        value={inputs.name}
        onChange={handleChange}
      />
      
      <label>Correo Electrónico:</label>
      <input
        name='email'
        placeholder='Escribe tu email...' 
        type="text"
        value={inputs.email}
        onChange={handleChange}
      />

      <label>Mensaje:</label>
      <textarea 
        name='message'
        placeholder='Escribe tu mensaje...'
        type="text"
        value={inputs.message}
        onChange={handleChange}
      />

      <button type='submit'>Enviar</button>

    </form>
  </div>
}
