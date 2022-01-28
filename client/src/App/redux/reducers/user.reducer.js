// Types
import { SET_USER, REMOVE_USER } from "../types/user.types";

const initialState = {
  user: {
    name: "",
    email: "",
    token: "",
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
