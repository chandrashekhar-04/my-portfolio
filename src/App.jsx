import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSocial from './components/Herosocial.jsx'
import About from './components/About.jsx'
import ResponsiveAppBar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ResponsiveAppBar />
    <HeroSocial />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
