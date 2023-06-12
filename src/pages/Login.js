import { Link } from 'react-router-dom';
import '../styles/pages/login.css';

function Login() {
    return (
        <div className="App">
            <div className="Page">
                <div className='Page-content'>
                    <h1>Login</h1>
                    <form method='POST' class="formLogin">
                        <label for="email">E-mail</label>
                        <input type="email"></input>
                        <label for="senha">Senha</label>
                        <input type="password"></input>
                        <button>Acessar</button>

                        <p>
                            Não é cadastrado?
                            <Link to="/cadastro" className='cadastroLink'>
                                Cadastre-se!
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;