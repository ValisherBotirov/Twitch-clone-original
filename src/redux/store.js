import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducers, { initialState } from "./reducers/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
