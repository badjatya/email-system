// Types
import { SET_USER, REMOVE_USER } from "../types/user.types";

const initialState = {
  user: {
    name: "",
    email: "",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjNiYTEyZjVmNGNhYjU5NWQ1MDA5MiIsInBhc3N3b3JkIjoiYXJjaGl0d2Vkc2JhZGphdHlhIiwiaWF0IjoxNjQzMzY0MjkwfQ.P9u7tCfiT_OvAN-er4MUKqKH_yVrszK7I-nLTxXpV4c",
  },
};

// User reducer
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };
    case REMOVE_USER:
      return { ...state, user: { name: "", email: "", token: "" } };
    default:
      return state;
  }
};

export default userReducer;
