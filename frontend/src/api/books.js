import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:4000/books'})

export const createBooks = (book) => API.post('/create', book);
export const fetchBooks = () => API.get('/');
