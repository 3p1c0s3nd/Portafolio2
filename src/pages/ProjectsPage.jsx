import { Link } from "react-router-dom";
import ComponentCarrusel from "../components/carrusel/ComponentCarrusel";
import ComponentHeader from "../components/header/ComponentHeader";
import ComponentParticle from "../components/particles/ComponentParticle";
import { useState, useEffect } from 'react';

const ProjectPage = ({ darkMode }) => {

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
            <ComponentHeader  darkMode={darkMode}/>
            <ComponentParticle theme={modooscuro}/>
            <h1 className="text-4xl font-bold my-8">Proyectos</h1>
            <div className=" flex justify-center items-center flex-row flex-wrap">
            
                <ul className="flex justify-center items-center flex-col md:w-1/4 mx-8 border-2 border-green-500 rounded-lg p-8 shadow-2xl shadow-green-500  hover:shadow-green-200 my-8">
                    <li className="my-2"><span className="text-2xl font-bold">Use Poke APi</span></li>
                    <li className="py-8"><Link to="https://poke-api-use.vercel.app/">Este proyecto fue realizado en React y tailwind, hace uso de la api de pokemon, usamos de la libreria axios y la libreria react-router-dom, ingresas con tu nombre y luego te da una lista de pokemones con sus detalles.</Link></li>
                    <li><ComponentCarrusel imagen1="./pokedex1.png" imagen2="./pokedex2.png" imagen3="./pokedex3.png" /></li>
                </ul>

                <ul className="flex justify-center items-center flex-col md:w-1/4 mx-8 border-2 border-green-500 rounded-lg p-8 shadow-2xl shadow-green-500  hover:shadow-green-200 my-8">
                    <li  className="my-2"><span className="text-2xl font-bold">Uso Api Rick and Morty</span></li>
                    <li className="py-8"><Link to="https://rickand-morty-use-api.vercel.app/">Este proyecto fue realizado en React y tailwind, hace uso de la api de rick and morty, usamos de la libreria axios para peticiones https. Puedes consultar los personajes de rick and morty y los capitulos.</Link></li>
                    <li><ComponentCarrusel imagen1="./rickymorty1.png" imagen2="./rickymorty2.png" imagen3="./rickymorty3.png" /></li>
                </ul>

                <ul className="flex justify-center items-center flex-col  mx-8 border-2 border-green-500 rounded-lg p-8 shadow-2xl shadow-green-500  hover:shadow-green-200 my-8 md:w-1/4">
                    <li className="my-2"><span className="text-2xl font-bold">Uso de CRUD</span></li>
                    <li className="py-8"><Link to="https://crud-test-xi.vercel.app/">Este proyecto fue realizado en React y tailwind, hace uso de un mini CRUD, usamos la libreria axios para comunicarnos con un crud y poder enviar, actualizar, borrar y editar datos de la base de datos.</Link></li>
                    <li><ComponentCarrusel imagen1="./crud1.png" imagen2="./crud2.png" imagen3="./crud3.png" /></li>
                </ul>

                <ul className="flex justify-center items-center flex-col md:w-1/4 mx-8 border-2 border-green-500 rounded-lg p-8 shadow-2xl shadow-green-500  hover:shadow-green-200 my-8 mt-8">
                    <li className="my-2"><span className="text-2xl font-bold">Scanner SQLi Error en Dart</span></li>
                    <li className="py-8"><Link to="https://github.com/3p1c0s3nd/CrawlerEnDart">Este es un proyecto en dart. Para ampliar mis conocimientos en el uso de este lenguaje de programacion. El programa extrae los enlaces de un sitio web y realiza una peticion get para probar si se encuentra una vulnerabilidad de SQLi.</Link></li>
                    <li><ComponentCarrusel imagen1="https://github.com/3p1c0s3nd/CrawlerEnDart/raw/main/image.png" imagen2="https://github.com/3p1c0s3nd/CrawlerEnDart/raw/main/image.png" imagen3="https://github.com/3p1c0s3nd/CrawlerEnDart/raw/main/image.png" /></li>
                </ul>


                <ul className="flex justify-center items-center flex-col md:w-1/4 mx-8 border-2 border-green-500 rounded-lg p-8 shadow-2xl shadow-green-500  hover:shadow-green-200 my-8 mt-8">
                    <li className="my-2"><span className="text-2xl font-bold">App de Celular Para Cultivar Alimentos</span></li>
                    <li className="py-8"><Link to="https://github.com/3p1c0s3nd/CultivaAlimentos">Este es un proyecto en flutter y dart. Para ampliar mis conocimientos en el uso de este lenguaje de programacion. Hacemos uso de objetos con informacion sobre como cultivar alimentos de granja.</Link></li>
                    <li><ComponentCarrusel imagen1="./cultivar1.png" imagen2="./cultivar2.png" imagen3="./cultivar1.png" /></li>
                </ul>


                <ul className="flex justify-center items-center flex-col md:w-1/4 mx-8 border-2 border-green-500 rounded-lg p-8 shadow-2xl shadow-green-500  hover:shadow-green-200 my-8 mt-8">
                    <li className="my-2"><span className="text-2xl font-bold">App de Celular Uso Api Youtube</span></li>
                    <li className="py-8"><Link to="https://github.com/3p1c0s3nd/UsoApiYoutube/">Este es un proyecto en flutter y dart. Para ampliar mis conocimientos en el uso de este lenguaje de programacion. Usamos la api de Youtube para poder crear una lista de videos y luego la mostramos.</Link></li>
                    <li><ComponentCarrusel imagen1="./youtube.png" imagen2="./youtube.png" imagen3="./youtube.png" /></li>
                </ul>


                <ul className="flex justify-center items-center flex-col md:w-1/4 mx-8 border-2 border-green-500 rounded-lg p-8 shadow-2xl shadow-green-500  hover:shadow-green-200 my-8 mt-8">
                    <li className="my-2"><span className="text-2xl font-bold">Aplicacion Del Clima</span></li>
                    <li className="py-8"><Link to="https://aplicacion-clima-ten.vercel.app/">Este proyecto fue realizado en React y css, Es el primer proyecto realizado con React, se hace uso de la libreria axios para peticiones http y obtener los datos del clima.</Link></li>
                    <li><ComponentCarrusel imagen1="./weather1.png" imagen2="./weather2.png" imagen3="./weather3.png" /></li>
                </ul>


                <ul className="flex justify-center items-center flex-col md:w-1/4 mx-8 border-2 border-green-500 rounded-lg p-8 shadow-2xl shadow-green-500  hover:shadow-green-200 my-8 mt-8">
                    <li className="my-2"><span className="text-2xl font-bold">Doodle Dash</span></li>
                    <li className="py-8"><Link to="https://github.com/3p1c0s3nd/doodle_dash">Este es un juego programado en flutter y dart. Para ampliar mis conocimientos en el uso de este lenguaje de programacion. Gracias a los cursos que se encuentran en codelabs de google.</Link></li>
                    <li><ComponentCarrusel imagen1="./doodledash1.png" imagen2="./doodledash2.png" imagen3="./doodledash3.png" /></li>
                </ul>

                <ul className="flex justify-center items-center flex-col md:w-1/4 mx-8 border-2 border-green-500 rounded-lg p-8 shadow-2xl shadow-green-500  hover:shadow-green-200 my-8 mt-8">
                    <li className="my-2"><span className="text-2xl font-bold">Asistente de Preguntas</span></li>
                    <li className="py-8"><Link to="https://test-gemini-google.vercel.app/pages/chat">Este proyecto creamos una api con nextjs y hacemos uso de ella. La api se conecta a gemini para hacer una pregunta y nos devuelve una respuesta la IA.</Link></li>
                    <li><ComponentCarrusel imagen1="./gemini1.png" imagen2="./gemini2.png" imagen3="./gemini3.png" /></li>
                </ul>
               
            </div>
            
        </div>
    )


}

export default ProjectPage;