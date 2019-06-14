import axio from 'axios';

const api = axio.create({
    baseURL: 'http://192.168.1.8:3333'
})

export default api;