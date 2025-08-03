
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

// Add login function
export const login = async (username: string, password: string) => {
  try {
    // Always use the backend endpoint, not the Mayan endpoint directly from frontend
    const response = await api.post('/login', { username, password });
    if (response.data.token) {
      Cookies.set("username", username, { path: "/" });
      Cookies.set("authToken", response.data.token, { path: "/" });
      if (response.data.sessionid) {
        Cookies.set("sessionid", response.data.sessionid, { path: "/" });
      }
      if (response.data.csrftoken) {
        Cookies.set("csrftoken", response.data.csrftoken, { path: "/" });
      }
      return response.data;
    }
    throw new Error('No token received');
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Add logout function
export const logout = async () => {
  try {
    await api.post('/logout');
    // Clear cookies on the client side
    Cookies.remove("authToken", { path: "/" });
    Cookies.remove("sessionid", { path: "/" });
    Cookies.remove("csrftoken", { path: "/" });
    Cookies.remove("username", { path: "/" });
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

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
