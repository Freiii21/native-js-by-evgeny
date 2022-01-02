import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = '9281af7a';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`?apikey=${key}&t=${title}`)
            .then(request => {
                //debugger;
                return request.data})
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`?apikey=${key}&t=${title}&type=${type}`)
            .then(request => {
                debugger;
                return request.data})
    }
};


export default API;
