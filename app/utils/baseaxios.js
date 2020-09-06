import axios from 'axios';

const baseURL = 'https://beeceptor.com/shared/';

const api = axios.create({ baseURL });

export default api;
