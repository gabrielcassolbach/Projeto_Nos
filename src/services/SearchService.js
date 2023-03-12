import api from "./api"

class SearchService {
    async search(artist, music) {
        try {
            const response = await api.get(`&art=${artist}&mus=${music}`);
            return response.data;
        } catch(error) {
            console.log('Erro ao pesquisar música', error);
        }
    }
}

export default new SearchService()