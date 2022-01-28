// IMPORTING Redux
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// IMPORTING Redux reducers
import userReducer from "./reducers/user.reducer";

// Combing Reducer and creating Store
const rootReducer = combineReducers({
  user: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
