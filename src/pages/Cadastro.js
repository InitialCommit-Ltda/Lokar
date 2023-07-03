import { useState } from 'react';
import { cadastro } from '../services/api';
import '../styles/pages/cadastro.css';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await cadastro(nome, sobrenome, telefone, email, usuario, senha);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="App">
            <div className="Page">
                <div className="Page-content">
                    <h1>
                        CADASTRO
                    </h1>
                    <form onSubmit={handleFormSubmit} className='formCadastro'>
                        <h2>Dados pessoais</h2>
                        <label htmlFor='inputNome'>Nome</label>
                        <input
                            id='inputNome'
                            type='text'
                            placeholder='Nome'
                            autoComplete='name'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        /><br/>
                        <label htmlFor='inputSobrenome'>Sobrenome</label>
                        <input
                            id='inputSobrenome'
                            type='text'
                            placeholder='Sobrenome'
                            autoComplete='name'
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)}
                        /><br/>
                        <h2>Contato</h2>
                        <label htmlFor='inputTelefone'>Telefone</label>
                        <input
                            id='inputTelefone'
                            type='tel'
                            placeholder='Telefone'
                            autoComplete='tel'
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        /><br/>
                        <label htmlFor='inputEmail'>Email</label>
                        <input
                            id='inputEmail'
                            type='email'
                            placeholder='Seu-email@dominio.com'
                            autoComplete='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /><br/>
                        <h2>Acesso</h2>
                        <label htmlFor='inputUsuario'>Usuario</label>
                        <input
                            id='inputUsuario'
                            type='text'
                            placeholder='Usuário'
                            autoComplete='username'
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        /><br/>
                        <label htmlFor='inputSenha'>Senha</label>
                        <input
                            id='inputSenha'
                            type='password'
                            placeholder='Senha'
                            autoComplete='password'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        /><br/><br/>
                        <button>
                            Cadastre-se
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Cadastro;