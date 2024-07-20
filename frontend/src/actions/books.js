import * as api from "../api/books";

export const createbook = (book) => async (dispatch) => {
  try {
    const { data } = await api.createBook(book);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchbooks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBooks();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatebook = (id, book) => async (dispatch) => {
  try {
    const { data } = await api.updateBook(id, book);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletebook = (id) => async (dispatch) => {
  try {
    await api.deleteBook(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
