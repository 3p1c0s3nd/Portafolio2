import ComponentHeader from "../components/header/ComponentHeader";
import ComponentParticle from "../components/particles/ComponentParticle";
import { useState, useEffect } from 'react';

const SkillsPage = ({ darkMode }) =>{

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
            <h1 className="mt-10 text-3xl mb-8">Lenguajes de Programacion que utilizo</h1>
            <div className="flex justify-center items-center flex-col md:w-1/4 mx-8 border-2 border-green-500 rounded-lg p-8 shadow-2xl shadow-green-500  hover:shadow-green-200 my-8">
              <ul className="flex justify-center items-center flex-row flex-wrap space-x-8 space-y-8">
                <li className="animate-pulse"><img src="./php.png"  alt="php" width={40} height={40}/></li>
                <li className="animate-pulse"><img src="./c++.png"  alt="c++" width={40} height={40}/></li>
                <li className="animate-pulse"><img src="./python.png"  alt="python" width={40} height={40}/></li>
                <li className="animate-pulse"><img src="./react.png"  alt="react" width={40} height={40}/></li>
                <li className="animate-pulse"><img src="./flutter.png"  alt="flutter" width={40} height={40}/></li>
                <li className="animate-pulse"><img src="./dart.png"  alt="dart" width={40} height={40}/></li>
                <li className="animate-pulse"><img src="./html.png"  alt="html" width={40} height={40}/></li>
                <li className="animate-pulse"><img src="./css.png"  alt="css" width={40} height={40}/></li>
                <li className="animate-pulse"><img src="./javascript.png"  alt="javascript" width={60} height={60}/></li>
              </ul>
            </div>

            <h1 className="mt-16 text-3xl mb-8">Herramientas de Seguridad Informatica que utilizo</h1>
            <div className="flex justify-center items-center  md:w-1/4 mx-8 border-2 border-green-500 rounded-lg p-8 shadow-2xl shadow-green-500  hover:shadow-green-200 my-8">
              <ul className="flex justify-center items-center  flex-wrap space-x-8 space-y-8">
                <li className="animate-pulse"><img src="./burpsuite.png"  alt="burpsuite" width={40} height={40}/></li>
                <li className="animate-pulse"><img src="./owaspzap.png"  alt="owaspzap" width={40} height={40}/></li>
                <li className="animate-pulse"><img src="./acunetix.png"  alt="acunetix" width={40} height={40}/></li>
                <li className="animate-pulse"><img src="./nessus.png"  alt="nessus" width={60} height={60}/></li>
                <li className="animate-pulse"><img src="./nmap.png"  alt="nmap" width={40} height={40}/></li>
                <li className="animate-pulse"><img src="./owasptop.png"  alt="owasptop" width={100} height={100}/></li>
                <li className="animate-pulse"><img src="./linux.png"  alt="linux" width={40} height={40}/></li>
              </ul>
            </div>
        </div>
    )

}

export default SkillsPage;