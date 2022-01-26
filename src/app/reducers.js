import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CLIENT":
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };

    case "GET_CLIENTS":
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };

    case "DELETE_CLIENT":
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };

    case "NEW_CLIENT":
      return {
        ...state,
        quoations: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
