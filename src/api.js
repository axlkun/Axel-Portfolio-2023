import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: 'http://127.0.0.1:8000',
  baseURL: 'https://portfoliocms.infinityfreeapp.com',
});

// Agrega la cabecera de autenticación con la cookie
axiosInstance.defaults.headers.common['Authorization'] = 'Bearer __test=fe4b67cb0dbf319f4280e1c2ce166e74; expires=2024-12-13T23:22:50.381Z; path=/';

export default axiosInstance;