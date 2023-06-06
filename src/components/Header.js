import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/img/logo.png';
import user from '../assets/icon/user.svg'
import '../styles/components.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="blank-space" />
            <div className="logo">
                <Link to="/">
                    <img src={logo} className="logo" alt="logo" />
                </Link>
            </div>
            <nav className="nav-list">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contato">Contato</Link>
                </li>
            </nav>
            <div className="login-icon">
                <Link to="/login">
                    <img src={user} className="login-icon" alt="login" /> Login
                </Link>
            </div>
            <div className="blank-space" />
        </header>
    );
}
/*
    <div className="row">
                <div className="logo-container col-2 offset-1">
                    <Link to="/">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </div>
                <nav className={`nav col-8 ${menuOpen ? 'open' : ''}`}>
                    <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contato">Contato</Link>
                        </li>
                        <li className="nav-item">

                            <Link to="/login"><img src={user} className="login-icon" alt="login" /> Login</Link>
                        </li>
                    </ul>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </nav>
            </div>
*/
export default Header;