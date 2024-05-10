import { combineReducers } from "redux";
import {books} from "./books";

const reducers = combineReducers({
  books: books
});

export default reducers;
