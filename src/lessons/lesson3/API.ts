import axios from 'axios';


const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = '9281af7a';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`?apikey=${key}&t==${title}`)
            .then(response => response.data)
            .catch(err => console.log(err));
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
