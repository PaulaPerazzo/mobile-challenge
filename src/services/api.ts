import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.staging.aca.so',
});

export default api;
