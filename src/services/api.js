import axios from 'axios';

const api = axios.create({
  baseURL: 'http://lokar.ddns.net:8099/',
});

export const login = async (email, senha) => {
  try {
    const response = await api.post('/login', { email, senha });
    return response.data;
  } catch (error) {
    throw new Error('Erro na comunicação com a API: Não foi possível estabelecer conexão com o servidor');
  }
};

export default api;
