import {Link} from 'react-router-dom';
import './nav.css'


function Nav() {
    return (
        <div className="nav-container">
            <div className="monogram"><Link to={"/"}>AJK</Link></div>
            <div className="navLink"> 
            <Link to={"/"}>Home</Link>
            <Link to={"/About"}>About</Link>
            <Link to={"/Projects"}>Projects</Link>
            <Link to={"/Skills"}>Skills</Link>          
            <Link to={"/Contact"}>Contact</Link>
            </div>            
        </div>
    )
};

export default Nav;