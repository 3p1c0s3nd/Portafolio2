import ComponentHeader from "../components/header/ComponentHeader";
import ComponentParticle from "../components/particles/ComponentParticle";
import { useState, useEffect } from 'react';
import './css/HomePage.css';


const HomePage = ({ darkMode }) =>{
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setIsVisible(true);
        }, 80); // Cambia 2000 a la cantidad de milisegundos que desees de retraso
    
        return () => clearTimeout(timeoutId);
      }, []); // El efecto se ejecutará solo una vez

      let modooscuro = "";
      if(darkMode) {
        modooscuro = "dark";
      } 

    return (
        <div className={`${darkMode ? 'text-white' : 'text-black'} flex justify-center items-center flex-col ${isVisible ? 'opacity-100' : 'opacity-95'}`}>
            <ComponentHeader darkMode={darkMode}/>
    
            <ComponentParticle theme={modooscuro}/>
            <div className="flex justify-center items-center flex-row">
              <div>
                <h2 className="animate-pulse"><img src="./relanpago.png" width={200} height={50}/></h2>
              </div>
            <div className={`principal flex justify-center items-center flex-col md:w-3/5 mx-8 border-2 ${darkMode ? 'border-green-500' : 'border-green-500'} rounded-lg p-8 ${darkMode ? 'shadow-2xl shadow-green-500' : 'shadow-2xl shadow-green-500'} hover:${darkMode ? 'shadow-gray-200' : 'shadow-green-200'} my-8 mt-8`}>
              Hola, soy Edwin Fajardo estoy cursando la carrera de Full Stack Developer en Academlo. Programador en Javascript, PHP, Python.
            </div>
            <div>
            <h2 className="animate-pulse"><img src="./relanpago.png" width={200} height={50}/></h2>
            </div>
            </div>
            <h2 className="animate-pulse"><img src="./relanpago.png" width={200} height={50}/></h2>
            
        </div>
    )
}

export default HomePage;