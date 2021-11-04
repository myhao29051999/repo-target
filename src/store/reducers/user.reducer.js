import {
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
} from "../constants/user.const";

const initialState = {
  userList: [],
  errors: {},
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_LIST_SUCCESS: {
      state.userList = payload; //set lại state
      return { ...state };
    }
    case GET_USER_LIST_FAILED: {
      state.errors = payload; //set lại state
      return { ...state };
    }

    default:
      return state;
  }
};

export default userReducer;
