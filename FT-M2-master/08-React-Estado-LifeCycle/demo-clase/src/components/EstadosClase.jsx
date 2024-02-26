import React from "react";
import style from '../components/EstadosClase.module.css'

class EstadosClase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    // ---------- Ciclo de vida del componente ---------- //
    componentDidMount(){
        console.log('El componente se ha MONTADO')
    }

    componentDidUpdate(){
        console.log('El componente se ha ACTUALIZADO')
    }

    componentWillUnmount(){
        console.log('El componente se DESMONTARÁ')
    }
    // ---------- Ciclo de vida del componente ---------- //

    render(){

        const disminuir = () => {
            this.state.count > 0 && this.setState({count: this.state.count - 1}, () => {
                console.log(this.state.count)
            })
        }

        const aumentar = () => {
            this.setState({count: this.state.count + 1},() => {
                console.log(this.state.count)  
            })
        }
        
        const reset = () => {
            this.setState({count: 0}, () => {
                console.log(this.state.count)
            })
        }

        return(
            <div className={style.container}>
                <h1 className={style.titulo}>Contador con estados (Clase)</h1>
                <h3 className={style.numero}>{this.state.count}</h3>
                <button onClick={disminuir} className={style.boton}>-</button>
                <button onClick={aumentar} className={style.boton}>+</button>
                <br />
                <button onClick={reset} className={style.reset}>RESET</button>
            </div>
        )

    }
}

export default EstadosClase;