const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CLIENT":
      return {
        ...state,
        clients: [...state.clients, action.payload],
      };

    case "GET_CLIENTS":
      return {
        ...state,
        clients: action.payload,
      };

    case "DELETE_CLIENT":
      return {
        ...state,
        clients: state.clients.filter((item) => item.id !== action.payload),
      };

    case "NEW_CLIENT":
      return {
        ...state,
        clients: [action.payload, ...state.clients],
      };

    default:
      return state;
  }
};

export default reducer;
