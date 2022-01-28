// IMPORTING Redux
import { combineReducers, createStore } from "redux";

// IMPORTING Redux reducers
import userReducer from "./reducers/user.reducer";

// Combing Reducer and creating Store
const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
