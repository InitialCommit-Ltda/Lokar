import { Link } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../services/api';
import '../styles/pages/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        try {
            const response = await login(email, senha);
            // Lógica adicional após o login bem-sucedido (redirecionamento, armazenamento de token, etc.)
            console.log(response); // Exemplo: exibe a resposta da API no console
        } catch (error) {
            console.error(error);
            // Lógica adicional em caso de erro (exibição de mensagem de erro, limpeza dos campos, etc.)
        }
    };

    return (
        <div className="App">
            <div className="Page">
                <div className='Page-content'>
                    <h1>Login</h1>
                    <form onSubmit={handleFormSubmit} className="formLogin">
                        <label htmlFor="email">E-mail/Usuário</label>
                        <input
                            type="text"
                            autoComplete='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            autoComplete='password'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
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