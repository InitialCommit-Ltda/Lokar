import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import user from '../assets/icon/user.svg'
import '../styles/components.css';

function Header() {
    return (
        <header className="header">
            <div className="menu-toggle">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
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
        </header>
    );
}

export default Header;