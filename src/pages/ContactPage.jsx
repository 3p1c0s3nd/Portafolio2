import ComponentHeader from "../components/header/ComponentHeader";
import ComponentParticle from "../components/particles/ComponentParticle";
import { useState, useEffect } from 'react';

const ContactPage = ({ darkMode }) => {
    const [isVisible, setIsVisible] = useState(false);
    

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 80);

        return () => clearTimeout(timeoutId);
    }, []);

   

    return (
        <div className={`flex justify-center items-center flex-col text-white ${isVisible ? 'opacity-100' : 'opacity-95'}`}>
          
            <ComponentParticle theme={darkMode ? 'dark' : 'light'} />
            <ComponentHeader  darkMode={darkMode}/>
            <h1>Contact Page</h1>
            
            <div className={`flex justify-center items-center flex-col md:w-3/5 mx-8 border-2 ${darkMode ? 'border-green-500' : 'border-green-500'} rounded-lg p-8 ${darkMode ? 'shadow-2xl shadow-green-500' : 'shadow-2xl shadow-green-500'} hover:${darkMode ? 'shadow-gray-200' : 'shadow-green-200'} my-8 mt-8`}>
                <form>
                    <input type="text" placeholder="Nombre" className={`m-4 border-2 ${darkMode ? 'border-gray-500' : 'border-green-500'} rounded-lg p-2 ${darkMode ? 'shadow-2xl shadow-gray-500' : 'shadow-2xl shadow-green-500'} hover:${darkMode ? 'shadow-gray-200' : 'shadow-green-200'} text-${darkMode ? 'white' : 'black'}`} required />
                    <input type="email" placeholder="Email" className={`m-4 border-2 ${darkMode ? 'border-gray-500' : 'border-green-500'} rounded-lg p-2 ${darkMode ? 'shadow-2xl shadow-gray-500' : 'shadow-2xl shadow-green-500'} hover:${darkMode ? 'shadow-gray-200' : 'shadow-green-200'} text-${darkMode ? 'white' : 'black'}`} required />
                    <textarea placeholder="Mensaje" className={`mt-4 mb-4 border-2 ${darkMode ? 'border-gray-500' : 'border-green-500'} rounded-lg p-2 ${darkMode ? 'shadow-2xl shadow-gray-500' : 'shadow-2xl shadow-green-500'} hover:${darkMode ? 'shadow-gray-200' : 'shadow-green-200'} w-full text-${darkMode ? 'white' : 'black'}`} required></textarea>
                    <button type="submit" className={`flex justify-center items-center  border-2 ${darkMode ? 'border-gray-500' : 'border-green-500'} rounded-lg p-2 ${darkMode ? 'shadow-2xl shadow-gray-500' : 'shadow-2xl shadow-green-500'} hover:${darkMode ? 'shadow-gray-200' : 'shadow-green-200'} w-full text-${darkMode ? 'white' : 'black'}`}>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;
