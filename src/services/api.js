import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getBooks = async (params = {}) => {
  const { q, page = 1, limit = 5, ...filters } = params;

  const queryParams = new URLSearchParams();

  // Add search term first
  if (q) {
    queryParams.append('q', q);
  }

  // Add filters
  Object.entries(filters).forEach(([key, value]) => {
    if (value) queryParams.append(key, value);
  });

 

  try {
 

    const response = await api.get(`/books?${queryParams.toString()}`);
    
    return {
      data: response.data,
      total:response.data.length
    };
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getBookById = (id) => api.get(`/books/${id}`);
export const createBook = (book) => api.post('/books', book);
export const updateBook = (id, book) => api.put(`/books/${id}`, book);
export const deleteBook = (id) => api.delete(`/books/${id}`);

export default api;