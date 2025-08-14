
import axios from 'axios';

// Axios instance for API calls
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
  },
});

// Check authentication status using new stateless endpoint
export const checkAuth = async () => {
  try {
    const response = await api.get('/check-auth');
    return response.data;
  } catch (error: unknown) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'response' in error &&
      typeof (error as { response?: { status?: number } }).response === 'object' &&
      (error as { response?: { status?: number } }).response?.status === 401
    ) {
      return { loggedIn: false };
    }
    throw error;
  }
};

// Login using new stateless endpoint
export const login = async (username: string, password: string) => {
  const response = await api.post('/login', { username, password });
  return response.data;
};

// Logout using new stateless endpoint
export const logout = async () => {
  await api.post('/logout');
};

// ...add other API functions as needed...

export default api;
