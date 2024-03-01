import { useNavigate } from "react-router-dom"

const Landing = () => {

    const navigate = useNavigate();

    const onMessage = () => {
        alert('Accessing...')
    }
    return (
        <div>
            <h1>React Router DOM</h1>
            <hr />
            <p>Esta es la demo de Routing con React-Router-Dom.</p>
            <button onClick={() => navigate('/home')}>Ingresar</button>
        </div>
    )
}

export default Landing;