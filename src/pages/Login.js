import { Link } from 'react-router-dom';
import '../styles/pages.css';

function Login() {
    return (
        <div className="App">
            <header className="Page">
                <h1>Login</h1>
                <form>
                    <label for="email">E-mail</label>
                    <input type="email"></input><br />
                    <label for="senha">Senha</label>
                    <input type="password"></input><br />
                    <button>Acessar</button>
                </form>

                <p className='login-cadastro'>
                    Não é cadastrado?
                    <Link to="/cadastro" className='login-cadastro-link'>
                        Cadastre-se!
                    </Link>
                </p>


            </header>
        </div>
    );
}

export default Login;