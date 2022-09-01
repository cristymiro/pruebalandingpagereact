import React, {useState} from 'react';
import { FiMenu, FiX} from "react-icons/fi";
import './Navbar.css';


const Navbar = ({navbarLinks}) => {
    const [menuClicked, setMenuClicked] = useState(false);

    const toggelMenuClick = () => {
        setMenuClicked(!menuClicked)
    }
  return (
  <nav className="navbar">
  <span className="navbar__logo">Travel</span>

    {menuClicked ? (
        <FiX size={25} className="navbar__menu" onClick={toggelMenuClick}/>
        ) : (
            <FiMenu size={25} className="navbar__menu" onClick={toggelMenuClick}/> )}
    <ul className="navbar__list">
        {navbarLinks.map((item) => {
            return (
                <li className="navbar__item" key={item.title}>
                    <a className="navbar__link" href={item.url}>
                    {item.title}
                    </a>
            </li>
            );
        })}
    </ul>
  </nav>
  )
}

export default Navbar;