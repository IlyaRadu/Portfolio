import instagram from "./../../img/icons/instagram.svg"
import gitHub from "./../../img/icons/gitHub.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"
import "./style.css"

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://www.instagram.com/ilya_nasva1/" target="_blank"><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/IlyaRadu" target="_blank"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!" target="_blank"><img src={linkedIn} alt="Link"/></a></li>
                </ul>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;