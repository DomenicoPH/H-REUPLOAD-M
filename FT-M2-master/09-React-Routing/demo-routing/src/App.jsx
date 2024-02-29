import { Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Home from './views/Home'
import About from './views/About'
import NavBar from './components/NavBar'
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
      {/* A localhost:5173 */}
        <Route path='/' Component={Landing} />
      {/* A localhost:5173/home */}
        <Route path='/home' Component={Home} />
      {/* A localhost:5173/about */}
        <Route path='/about' Component={About} />
      </Routes>
    </div>
  )
}

export default App
