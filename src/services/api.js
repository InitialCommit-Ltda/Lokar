import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://lokar.ddns.net:8099/',
  baseURL: 'http://localhost:3001/',
});

export const login = async (email, senha) => {
  try {
    const response = await api.post('/login', { email, senha });
    return response.data;
  } catch (error) {
    throw new Error('Erro na comunicação com a API: Não foi possível estabelecer conexão com o servidor');
  }
};

export const cadastro = async (nome, sobrenome, telefone, email, usuario, senha) => {
  try {
    const response = await api.post('/cadastro', { nome, sobrenome, telefone, email, usuario, senha });
    return response.data;
  } catch (error) {
    throw new Error('Erro na comuncação com a API: Não foi possível estabelecer conexão com o servidor');
  }
};

export default api;
