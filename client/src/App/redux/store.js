// IMPORTING Redux
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// IMPORTING Redux reducers

// Combing Reducer and creating Store
const rootReducer = combineReducers({});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
