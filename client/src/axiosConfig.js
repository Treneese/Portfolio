// src/axiosConfig.js
// src/axiosConfig.js
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'https://treneese-engineer-portfolio-backend.vercel.app'; 

const instance = axios.create({
  baseURL,
});

export default instance;
