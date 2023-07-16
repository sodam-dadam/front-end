import axios, { AxiosInstance } from 'axios';
// const apiKey = import.meta.env.VITE_API_KEY;
const apiKey = 'http://sodamdadam.s3-website.us-east-2.amazonaws.com/';
const instance: AxiosInstance = axios.create({
  baseURL: apiKey,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  timeout: 30000,
});

export default instance;
