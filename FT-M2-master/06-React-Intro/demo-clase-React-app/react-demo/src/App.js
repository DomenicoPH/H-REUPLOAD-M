import './App.css';
import ListaPersonasFuncional from './components/ListaPersonas/ListaPersonasFuncional';
import ListaPersonasClase from './components/ListaPersonas/ListaPersonasClase';

const listaPersonas = [
  {name: 'Domenico Pagano', age: 38},
  {name: 'Graciela Valderrama', age: 37},
  {name: 'Gia Perrito', age: 6},
  {name: 'Juanito Lafuria', age: 25},
  {name: 'Sam Cucaracha', age: 40},
  {name: 'Otto Manfredi', age: 67},
  {name: 'Lydia Leeds', age: 16},
  {name: 'Lloyd Christmas', age: 26},
  {name: 'Harry Dunn', age: 27}
]

function App() {
  return (
    <div className="App">

      {/*  Hardcoded
      
      <h1>Mi primera app de React</h1>
      <h4>Puerto: localhost:3000</h4>
      <hr />

      <p><b><i>Componentes:</i></b> Funcional y de Clase</p>
      <hr />

        <ListaPersonasFuncional />
        <ListaPersonasClase /> */}

        <ListaPersonasFuncional lista={listaPersonas} />

    </div>
  );
}

export default App;
