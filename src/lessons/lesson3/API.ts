import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = '9281af7a';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `?apikey=${key}&t=${title}`;
        return axiosInstance.get(query)
            .then(request => request.data)
    },
    searchFilmsByType: (title: string, type: string) => {
        const query = `?apikey=${key}&t=${title}&type=${type}`;
        return axiosInstance.get(query)
            .then(request => {
                //debugger;
                return request.data})
    }
};


export default API;
