import axios, { AxiosInstance } from 'axios';
const apiURL = process.env.REACT_APP_API_URL;

const instance: AxiosInstance = axios.create({
  baseURL: apiURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  timeout: 30000,
});

export default instance;
