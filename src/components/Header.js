import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';
import user from '../assets/icon/user.svg'
import '../styles/components.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const menuElement = document.querySelector('.menu-sidebar');
            if (menuElement && !menuElement.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="header">
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className={`menu-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-content">
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/contato" onClick={closeMenu}>Contato</Link>
                </div>
            </div>

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
            <div className="login">
                <Link to="/login">
                    <img src={user} className="login-icon" alt="login" /> Login
                </Link>
            </div>
        </div>
    );
}

export default Header;