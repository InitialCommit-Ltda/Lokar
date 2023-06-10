import { Link } from 'react-router-dom';
import '../styles/pages.css';

function Login() {
    return (
        <div className="login">
            <header className="page">
                <h1>Login</h1>
                <form method='POST'class="formLogin">
                    <label for="email">E-mail</label>
                    <input type="email"></input>
                    <label for="senha">Senha</label>
                    <input type="password"></input>
                    <button>Acessar</button>
                    
                    <p className='login-cadastro'>
                    Não é cadastrado? 
                    <Link to="/cadastro" className='login-cadastro-link'>
                        Cadastre-se!
                    </Link>
                </p>

                </form>
            </header>
        </div>
    );
}

export default Login;