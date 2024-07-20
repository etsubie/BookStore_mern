export const books = (state = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    case "FETCH_ALL":
      return action.payload;
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
