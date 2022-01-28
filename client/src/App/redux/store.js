// IMPORTING Redux
import { combineReducers, createStore } from "redux";

// IMPORTING Redux reducers

// Combing Reducer and creating Store
const rootReducer = combineReducers({});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
