import './App.css'
import NavHeader from './NavHeader'
import Home from './pages/Home'
import Teams from './pages/Teams'
import About from './pages/About'
import Footer from './pages/Footer'

function App() {
  return (
    <div className='app-container'>
      <NavHeader/>
        <Home/>
        <Teams/>
        <About/>
        <Footer/>
    </div>
  )
}

export default App
