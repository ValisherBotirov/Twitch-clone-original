import { createStore } from "redux";
import reducers, { initialState } from "./reducers/reducer";

const store = createStore(reducers, initialState);

export default store;
