import React from "react";
import {useDispatch} from 'react-redux'
import { enviarForm } from "../../redux/actions/actions";

const ContactUs = () => {
  
  const [form, setForm] = React.useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });
  
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(enviarForm(form))
    setForm({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
    })
  }

  return (
    <div>
      <form className="contactBg" >
        <label htmlFor="nombre">Nombre: </label>
        <input onChange={handleInput} name="nombre" value={form.nombre} />
        <label htmlFor="email">Email: </label>
        <input onChange={handleInput} name="email" value={form.email} />
        <label htmlFor="asunto">Asunto: </label>
        <input onChange={handleInput} name="asunto" value={form.asunto} />
        <label htmlFor="mensaje">Mensaje: </label>
        <input onChange={handleInput} name="mensaje" value={form.mensaje} />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
