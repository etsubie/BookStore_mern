const initialState = [];

export const books = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    case "FETCH_ALL":
      return action.payload;
      case "FETCH_BY_ID":
        return state.find((book) => book._id === action.payload._id) || null;      
    case "DELETE":
      return state.filter((book) => book._id !== action.payload);
    case "UPDATE":
      return state.map((book) =>
        book._id === action.payload._id ? action.payload : book
      );
    default:
      return state;
  }
};
