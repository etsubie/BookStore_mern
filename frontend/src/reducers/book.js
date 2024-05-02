const book = (state = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    case "FETCH_ALL":
      return action.payload;
    default:
      return state;
  }
};

export default book;
