import * as api from "../api/books";

export const createBooks = (book) => async (dispatch) => {
  try {
    const { data } = await api.createBooks(book)
    dispatch({ type: "CREATE", payload: data });
    console.log(data)
  } catch (error) {
    console.log(error);
  }
};

export const fetchBooks = () => async (dispatch) => {
  try {
    const {data} = await api.fetchBooks();
    dispatch({type: "FETCH_ALL", payload: data})
  } catch (error) {
    console.log(error);
  }
}
