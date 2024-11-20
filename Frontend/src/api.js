// src/api.js
import axios from 'axios';

const api = axios.create({
//   baseURL: 'https://f03c-171-79-35-160.ngrok-free.app/api',  // Set the base URL to your backend
//   headers: { 'Content-Type': 'application/json',"ngrok-skip-browser-warning": "true" },
baseURL:"http://localhost:5000/api",
headers: { 'Content-Type': 'application/json'}
});

export default api;
