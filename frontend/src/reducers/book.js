const book = (state = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default book;
