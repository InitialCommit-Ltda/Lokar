import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/', // URL base da sua API
  // Outras configurações, como headers ou autenticação, podem ser adicionadas aqui
});

export const login = async (email, senha) => {
  try {
    const response = await api.post('/login', { email, senha });
    console.log('DEU CERTO');
    return response.data; // Retorna a resposta da API para ser tratada no componente
  } catch (error) {
    throw new Error('Erro ao fazer login'); // Lança uma exceção em caso de erro
  }
};

// Outras funções para interagir com a API podem ser adicionadas aqui

export default api;
