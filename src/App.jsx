import { useState, useEffect } from 'react';
import ResponsiveAppBar from './components/Navbar.jsx';
import HeroSocial from './components/Herosocial.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Education from './components/Education.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);


  return (
    <>
      <ResponsiveAppBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSocial darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer />
    </>
  );
}

export default App;
