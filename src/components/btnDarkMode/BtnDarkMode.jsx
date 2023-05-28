import sun from "./sun.svg"
import moon from "./moon.svg"
import "./style.css"
import { useEffect, useRef } from "react"
import { UseLocalStorage} from "./../../utils/UseLocalStorage"

const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = UseLocalStorage('darkMode', 'light'); 

    const btnRef = useRef(null);

    useEffect(() => {
        if(darkMode === 'dark') {
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active')
        } else {
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active')
        }
    }, [darkMode])

    const toggleDakrMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        }) 
    }
    return ( 
        <button ref={btnRef} onClick={toggleDakrMode} className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
     );
}
 
export default BtnDarkMode;