import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/img/logo.png';
import '../styles/components.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="row">
                <div className="logo-container col-2">
                    <Link to="/">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </div>
                <nav className={`nav col-9 ${menuOpen ? 'open' : ''}`}>
                    <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contato">Contato</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cadastro">Cadastro</Link>
                        </li>
                    </ul>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;