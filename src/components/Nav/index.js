import {useState} from 'react';
import {Link} from 'react-router-dom';
import './nav.css'


function Nav() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => {
        setClick(false);
    }
     

    return (
        <div className="navbar">
            <div className="monogram"><Link to={"/"}>AJK</Link></div>
            <div className="navLink">
            <div className="nav-menu-container">   
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className='nav-item'>
              <Link to="/About" className='nav-links' onClick={closeMobileMenu}>About</Link>
              </li>
              <li className='nav-item'>
              <Link to="/Projects" className='nav-links' onClick={closeMobileMenu}>Projects</Link>
              </li>
              <li className='nav-item'>             
              <Link to="/Skills"
               className='nav-links'
               onClick={closeMobileMenu}>Skills</Link>               
              </li>
              <li className='nav-item'>
              <Link to="/Contact" className='nav-links' onClick={closeMobileMenu}>Contact</Link>
              </li>                       
                  
              </ul> 
              </div>             
         
            <div className={'menu-icon'} onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
            </div>
           
            </div>            
        </div>
        
    )
};

export default Nav;