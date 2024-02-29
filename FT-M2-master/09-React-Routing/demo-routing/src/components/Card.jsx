import style from './Card.module.css'

const Card = (props) => {
    console.log(props.residents)
    return (
        <div className={style.container}>
            
            <div className={style.title}>
                <h1>{props.name}</h1>
            </div>

            <div className={style.dataContainer}>
                <h4>Población: <span className={style.span}>{props.pop}</span></h4>
                <h4>Terreno: <span className={style.span}>{props.terreno}</span></h4>
                <h4>Clima: <span className={style.span}>{props.clima}</span></h4>
                <h4>Gravedad: <span className={style.span}>{props.gravedad}</span></h4>
            </div>

        </div>
    )
}

export default Card;