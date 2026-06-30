import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar.jsx';
import HeroSocial from './components/Herosocial.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Education from './components/Education.jsx';
import Layout from './components/Layout.jsx';
import Admin from './components/Admin.jsx';

function HomeSections({ darkMode }) {
  return (
    <>
      <HeroSocial darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      // Default to dark when no preference is stored
      if (stored === null) return true;
      return stored === 'dark';
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Layout darkMode={darkMode}>
      <ResponsiveAppBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<HomeSections darkMode={darkMode} />} />
        <Route path="/admin" element={<Admin darkMode={darkMode} />} />
        <Route path="*" element={<HomeSections darkMode={darkMode} />} />
      </Routes>
    </Layout>
  );
}

export default App;
