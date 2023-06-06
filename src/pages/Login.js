import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Login</h1>
                <label for="email">E-mail</label>
                <input type="email"></input>
                <label for="senha">Senha</label>
                <input type="password"></input>
                <button>Acessar</button>
                <Link to="/cadastro">
                    <button>Cadastrar</button>
                </Link>                
            </header>
        </div>
    );
}

export default Login;