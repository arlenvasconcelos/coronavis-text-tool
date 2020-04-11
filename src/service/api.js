import axios from 'axios';


const api = axios.create({
  baseURL: process.env.REACT_APP_REST_API_LOCATION,
  mode: 'no-cors',
});

export default api;