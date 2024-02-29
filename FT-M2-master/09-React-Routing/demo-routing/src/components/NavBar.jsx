import { Link } from 'react-router-dom'
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={style.container}>
            <div className={style.links}>
                <Link to='/'>
                    <p className={style.link}>Landing</p>
                </Link>
                <Link to='/home'>
                    <p className={style.link}>Home</p>
                </Link>
                <Link to='/about'>
                    <p className={style.link}>About</p>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;