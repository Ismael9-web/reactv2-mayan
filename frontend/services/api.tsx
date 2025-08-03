
import axios from 'axios';
import type { AxiosResponse, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

// Handler for SPA navigation on 401
let apiUnauthorizedHandler: (() => void) | null = null;

export function setApiUnauthorizedHandler(handler: () => void) {
  apiUnauthorizedHandler = handler;
}

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Accept': 'application/json',
    // Do NOT set Content-Type globally; let browser/axios set it for FormData
  },
  withCredentials: true, // Ensure cookies are sent with requests
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = Cookies.get('authToken');
  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  // Remove Content-Type for FormData requests
  if (config.data instanceof FormData) {
    if (config.headers && config.headers['Content-Type']) {
      delete config.headers['Content-Type'];
    }
  }
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove('authToken');
      if (apiUnauthorizedHandler) {
        apiUnauthorizedHandler();
      }
    }
    return Promise.reject(error);
  }
);

export default api;
