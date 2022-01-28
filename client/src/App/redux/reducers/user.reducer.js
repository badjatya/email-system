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
    default:
      return state;
  }
};

export default userReducer;
