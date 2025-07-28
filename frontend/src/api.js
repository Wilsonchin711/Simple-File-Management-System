import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // backend server
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getNotes: () => api.get('/notes'),
  createNote: (note) => api.post('/notes', note),
  updateNote: (note) => api.put(`/notes/${note.id}`, note),
  deleteNote: (id) => api.delete(`/notes/${id}`),
};
