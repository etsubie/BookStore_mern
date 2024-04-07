import * as api from "../api/books";

export const createBooks = (book) => async (dispatch) => {
  try {
    const { data } = await api.createBooks(book);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
