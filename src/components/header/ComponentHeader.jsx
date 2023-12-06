import { Link, useLocation  } from "react-router-dom";

const ComponentHeader = ({darkMode}) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const isHomePage = currentPath === '/' ? "underline underline-offset-8" : "";
    const isAboutPage = currentPath === '/about' ? "underline underline-offset-8" : "";
    const isContactPage = currentPath === '/contact' ? "underline underline-offset-8" : "";
    const isSkillsPage = currentPath === '/skills' ? "underline underline-offset-8" : "";
    const isProjectsPage = currentPath === '/projects' ? "underline underline-offset-8" : "";
    

    return (
        <div className={`header flex justify-center items-center ${darkMode ? 'text-white' : 'text-black'} relative w-full`}>
          <nav>
            <ul className="flex gap-8 md:gap-32 my-8">
              <li className={`hover:text-yellow-400 hover:text-2xl ease-out duration-300 ${isHomePage}`}><Link to="/">Home</Link></li>
              <li className={`hover:text-yellow-400 hover:text-2xl ease-out duration-300 ${isAboutPage}`}><Link to="/about">About</Link></li>
              <li className={`hover:text-yellow-400 hover:text-2xl ease-out duration-300 ${isContactPage}`}><Link to="/contact">Contact</Link></li>
              <li className={`hover:text-yellow-400 hover:text-2xl ease-out duration-300 ${isSkillsPage}`}><Link to="/skills">Skills</Link></li>
              <li className={`hover:text-yellow-400 hover:text-2xl ease-out duration-300 ${isProjectsPage}`}><Link to="/projects">Projects</Link></li>
            </ul>
          </nav>
        </div>
      );
      
}

export default ComponentHeader;