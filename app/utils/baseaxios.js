import axios from 'axios';

const baseURL = 'https://run.mocky.io/v3/';

const api = axios.create({ baseURL });

export default api;
