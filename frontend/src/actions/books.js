import * as api from "../api/books";

export const createbook = (book) => async (dispatch) => {
  try {
    const { data } = await api.createBook(book);
    dispatch({ type: "CREATE", payload: data });
    console.log("book created successfully!");
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const fetchbooks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBooks();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const fetchbook = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchBook(id);
    dispatch({ type: "FETCH_BY_ID", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const updatebook = (id, book) => async (dispatch) => {
  try {
    const { data } = await api.updateBook(id, book);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const deletebook = (id) => async (dispatch) => {
  try {
    await api.deleteBook(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log({ message: error.message });
  }
};
