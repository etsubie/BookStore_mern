import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000/books" });

export const createBook = (book) => API.post("/create", book);
export const fetchBooks = () => API.get("/");
export const fetchBook = (id) => API.get(`/${id}`);
export const updateBook = (id, book) => API.patch(`/edit/${id}`, book);
export const deleteBook = (id) => API.delete(`/delete/${id}`);
