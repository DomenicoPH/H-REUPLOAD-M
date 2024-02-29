import Cards from "../components/Cards";
import style from './Home.module.css'

const Home = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Star Wars</h1>
            <h3 className={style.subtitle}><i>Planets</i></h3>
            <hr />
            <Cards />
        </div>
    )
}

export default Home;