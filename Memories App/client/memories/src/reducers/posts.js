const posts = (state = [], action) => {
  switch (action.type) {
    case "UPDATE":
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "FETCH_BY_SEARCH":
      return {
        ...state,
        posts: action.payload,
      };
    case "FETCH_ALL":
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case "LIKE":
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "CREATE":
      return [...state, action.payload];

    case "DELETE":
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export default posts;
