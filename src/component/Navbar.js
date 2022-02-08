import classes from './Navbar.module.css'
import logo from './logo.png'
import { BiSearchAlt } from "react-icons/bi";
import HamburgerMenu from 'react-hamburger-menu';

const Navbar = () => {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo}></img>
            </div>
            <nav className={classes.nav}>
                <ul className>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Courses </a></li>
                    <li><a href="#">Certifications</a></li>
                </ul>
            </nav>
            <form className={classes.search}>
                <input type="text" placeholder='Search This Site'></input>
                <button ><BiSearchAlt className={classes.fav} /></button>
            </form>

        </header>
    );
}

export default Navbar;
