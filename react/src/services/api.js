import axios from 'axios';

const api = (baseURL) => axios.create({
  baseURL
});



export default api;