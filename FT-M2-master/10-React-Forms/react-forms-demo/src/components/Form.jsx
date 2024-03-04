import { useState } from 'react'
import styled from 'styled-components'

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

const Form = () => {

    const [form, setForm] = useState({
        username: '',
        password: '',
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({...form, [property]: value})
    }

    const submitHandler = () => {
        event.preventDefaultnt
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
                    />
                </StyledBlocks>

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