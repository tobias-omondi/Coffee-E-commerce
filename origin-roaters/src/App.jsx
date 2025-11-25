import './App.css'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Navbar from './components/NavbarSection/Navbar'
import HeroSection from './components/LandingPage/HeroSection'

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<HeroSection />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
