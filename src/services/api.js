import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa'
})

export default api;