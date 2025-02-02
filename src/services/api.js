import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:7000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const productService = {
  getAllProducts: () => api.get('/products/list-products'),
  getProduct: (id) => api.get(`/products/product/${id}`),
  createProduct: (data) => api.post('/products/create-product', data),
  updateProduct: (id, data) => api.put(`/products/update-product/${id}`, data),
  deleteProduct: (id) => api.delete(`/products/delete-product/${id}`),
};

export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
};

export const subscriptionService = {
  subscribe: (email) => api.post('/subscription/subscribe', { email }),
};

export default api; 