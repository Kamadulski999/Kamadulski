import {Link} from 'react-router-dom';
import './nav.css'


function Nav() {
    return (
        <div className="nav">          
            <Link className="navLink" to={"/"}>AJK</Link>
            <Link className="navLink" to={"/About"}>About</Link>
            <Link className="navLink" to={"/Projects"}>Projects</Link>
            <Link className="navLink" to={"/Skills"}>Skills</Link>
            <Link className="navLink" to={"/Contact"}>Contact</Link>
            <Link className="navLink" to={"/Resume"}>Resume</Link>            
        </div>
    )
};

export default Nav;