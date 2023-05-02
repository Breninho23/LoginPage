import api from './api'

export const useApi = () => ({
    validateToken: async(token:string) => {
        return {
            user: { id: 1, nome: 'ana' }
        };
        const response = await api.post('/validate' , {token});
        return response.data;
    },

    signin: async (login: string, senha: string) => {
        const response = await api.post('/login', {login, senha})  
        return {
            user: { id: response.data.id, nome: response.data.nome},
            token: response.data.token
        };
    },

    logout: async () => {
        //vou mandar a requisição para deslogar do spring
        await api.post('/logout', localStorage.getItem('authToken'));        
    }


})

