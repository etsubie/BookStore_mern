import { combineReducers } from "redux";
import book from "./book";

const reducers = combineReducers({
  books: book
});

export default reducers;
