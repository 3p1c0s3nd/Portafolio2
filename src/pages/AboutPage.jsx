import ComponentHeader from "../components/header/ComponentHeader";
import ComponentParticle from "../components/particles/ComponentParticle";
import { useState, useEffect } from 'react';

const AboutPage = ({ darkMode }) => {

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
        <>
            <div className={`${darkMode ? 'text-white' : 'text-black'} flex justify-center items-center flex-col ${isVisible ? 'opacity-100' : 'opacity-95'}`}>
            <ComponentHeader darkMode={darkMode}/>
                <div className={`flex justify-center items-center flex-col md:w-3/5 mx-8 border-2 ${darkMode ? 'border-green-500' : 'border-green-500'} rounded-lg p-8 ${darkMode ? 'shadow-2xl shadow-green-500' : 'shadow-2xl shadow-green-500'} hover:${darkMode ? 'shadow-gray-200' : 'shadow-green-200'} my-8 mt-8`}>
                    Me Presento soy Edwin Fajardo, soy una persona apasionada por la programacion y la seguridad informatica. Constantemente estoy aprendiendo nuevos lenguajes de programacion. Comence hace 5 años a programar y a estudiar la seguridad informatica en foros, videos, y tutoriales. Me considero una persona muy responsable y organizada. He trabajado la automatizacion de procesos como el webscraping para extraer informacion de paginas web.
                    <p className="mt-4">
                    Mi conocimiento abarca varios lenguajes de programación, incluyendo PHP, reactjs, flutter, dart, html, css, y JavaScript, lo que me ha permitido comprender en profundidad los aspectos técnicos de la seguridad en línea. Mi enfoque se basa en la búsqueda constante de soluciones innovadoras para proteger la información y los sistemas.
                        </p> 
                </div>
                <ComponentParticle theme={modooscuro}/>
            </div>
        </>
    )
}

export default AboutPage;