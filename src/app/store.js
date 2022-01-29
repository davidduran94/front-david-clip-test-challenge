import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {
  clients: [],
  modeEdit: false,
  clientEdit: {},
  alertType: "",
};

const store = createStore(reducer, initialState);

export default store;
