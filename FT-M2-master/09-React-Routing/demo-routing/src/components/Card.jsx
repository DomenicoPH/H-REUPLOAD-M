import { Link } from 'react-router-dom'
import style from './Card.module.css'

const Card = (props) => {
    return (
        <div className={style.container}>
            
            <div className={style.title}>
                <h1>{props.name}</h1>
            </div>

            <img src={props.image} alt={props.name} />

            <div className={style.dataContainer}>
                <h4>Población: <span className={style.span}>{props.pop}</span></h4>
                <h4>Terreno: <span className={style.span}>{props.terreno}</span></h4>
                <h4>Clima: <span className={style.span}>{props.clima}</span></h4>
                <h4>Gravedad: <span className={style.span}>{props.gravedad}</span></h4>
            </div>

            <Link to={`/detail/${props.id}`}>
            <button>Ver mas</button>
            </Link>

        </div>
    )
}

export default Card;