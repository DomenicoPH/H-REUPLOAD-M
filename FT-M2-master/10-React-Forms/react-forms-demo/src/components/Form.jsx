import { useState } from 'react'
import styled from 'styled-components'
import style from './Form.module.css'

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyedForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: blueviolet;
    padding: 10px;
    border-radius: 7px;
    padding: 50px;
`
const StyledBlocks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-weight: bolder;
    letter-spacing: .2rem;
`
const StyledButton = styled.button`
    margin: 5px;
    background-color: blueviolet;
`
const StyledError = styled.span`
    display: flex;
    align-items: center;
    padding-left: 100px;
    min-height: 25px;
    color: red;
    font-size: .7rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const validate = (form, errors, setErrors) => {

    if(!form.username) setErrors({...errors, username: 'Username vacío'})
    else{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.username)) 
        setErrors({...errors, username: ''})
        else setErrors({...errors, username: 'Username inválido'})
    }

}

const Form = () => {

    const [form, setForm] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({...form, [property]: value})
        validate({...form, [property]: value}, errors, setErrors)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        alert('Login Exitoso')
    }

    console.log(form.username)
    console.log(form.password)

    return(
        <StyledContainer>
            <StyedForm onSubmit={submitHandler}>

                <StyledBlocks>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        name='username' 
                        value={form.username} 
                        onChange={handleChange}
                        className={errors.username ? style.error : style.success}
                    />
                </StyledBlocks>

                <StyledError>{errors.username}</StyledError>

                <StyledBlocks>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        name='password' 
                        value={form.password} 
                        onChange={handleChange}
                    />
                </StyledBlocks>

                <StyledButton type='submit'>Login</StyledButton>

            </StyedForm>
        </StyledContainer>
    )
}

export default Form;