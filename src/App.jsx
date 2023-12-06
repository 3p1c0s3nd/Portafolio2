import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import { useState } from 'react'


function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className="page-transition-container">
        <div className='flex flex-row place-content-between'>
          <button onClick={toggleDarkMode} className="mt-8 p-2 bg-gray-600 text-white rounded-lg h-10">{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
          <div>
            <ul className='flex flex-row space-x-8 mt-8'>
              <li className='animate-bounce'><Link to={"https://www.linkedin.com/in/edwin-fajardo-murillo-88a288287/"}><img src="./linkedin.png"  alt="github" width={80} height={80}/></Link></li>
              <li className='animate-bounce'><Link to={"https://github.com/3p1c0s3nd"}><img src={darkMode ? "./9919.png" : "./github.png"}  alt="github" width={darkMode ? 40 : 80} height={darkMode ? 80 : 80}/></Link></li>
              <li className='animate-bounce'><Link to={"mailto:jaguargomezcom@gmail.com"}><img src="./mail.png"  alt="github" width={40} height={40}/></Link></li>
              <li className='animate-bounce'><Link to={"https://w.app/8xAMrk"}><img src="./whatsapp.webp"  alt="github" width={40} height={80}/></Link></li>
           </ul>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
          <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
          <Route path="/skills" element={<SkillsPage darkMode={darkMode} />} />
          <Route path="/projects" element={<ProjectsPage darkMode={darkMode} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
