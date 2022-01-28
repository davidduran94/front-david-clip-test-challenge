const reducer = (state, action) => {
  switch (action.type) {
    case "EDIT_CLIENT":
      return {
        ...state,
        clientEdit: action.payload,
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
        clients: [...state.clients, action.payload],
      };

    case "TOGGLE_MODE":
      return {
        ...state,
        modeEdit: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
