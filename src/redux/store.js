import { applyMiddleware, createStore, compose } from "redux";
import reducers, { initialState } from "./reducers/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()));

export default store;
