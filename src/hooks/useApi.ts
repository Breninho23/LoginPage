import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080"
});


export const useApi = () => ({
    validateToken: async(token:string) => {
        return {
            user: { id: 3, nome: 'José', login: 'jose@gmail.com' }
        };
        const response = await api.post('/validate' , {token});
        return response.data;
    },

    signin: async (login: string, senha: string) => {
        const response = await api.post('/login', {login, senha})   
        return {
            user: { id: 3, nome: 'José', login: 'jose@gmail.com' },
            token: response.data.token
        };
    },

    logout: async () => {
        return { status: true };

        const response = await api.post('logout');
        return response.data;
    }


})

