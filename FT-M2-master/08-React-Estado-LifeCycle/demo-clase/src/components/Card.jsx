import style from './Card.module.css'

const Card = (props) => {
    return (
        <div className={style.container}>
            <h2>{props.id}</h2>
            <h3>{props.name}</h3>
            <h3>{props.email}</h3>
        </div>
    )
}

export default Card;