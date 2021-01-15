import "./styles.css";
import {ReactComponent as Youtuve} from "./youtube.svg";
import {ReactComponent as Instagram} from "./instagram.svg";
import {ReactComponent as Linkedin} from "./linkedin.svg";
function Footer(){
return (
    <footer className="main-footer">
        App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
        <div className="footer-icons">
         <a href="https://www.youtube.com/c/Devsuperior" target="_new">
         <Youtuve />
         </a>
         <a href="https://www.linkdin.com/school/devsuperior/" target="_new">
         <Linkedin />  
         </a>
         <a href="https://www.instagran.com/devsuperior.ig/" target="_new">
         <Instagram />
         </a>
        </div>
    </footer>
)
}
export default Footer;