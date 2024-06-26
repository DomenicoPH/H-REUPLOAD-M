import { Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Home from './views/Home'
import About from './views/About'
import NavBar from './components/NavBar'
import Detail from './views/Detail'
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' Component={Landing} />            {/* A localhost:5173 */}
        <Route path='/home' Component={Home} />           {/* A localhost:5173/home */}
        <Route path='/about' Component={About} />         {/* A localhost:5173/about */}
        <Route path='/detail/:id' Component={Detail}/>    {/* A localhost:5173/detail/:id */}
      </Routes>
    </div>
  )
}

export default App
