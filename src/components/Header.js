import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo-container">
                    <Link to="/">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
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
                </nav>
            </div>
        </header>
    );
}

export default Header;