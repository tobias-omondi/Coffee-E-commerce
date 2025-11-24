import './App.css'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Navbar from './components/NavbarSection/Navbar'
import Home from './components/LandingPage/Home'

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
