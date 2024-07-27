// src/axiosConfig.js
// src/axiosConfig.js
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://3.14.145.75:8080'; 

const instance = axios.create({
  baseURL,
});

export default instance;
