import {
  GET_HE_THONG_SUCCESS,
  GET_HE_THONG_FAILED,
} from "../constants/heThong.const";

const initialState = {
  systemList: [],
  errors: {},
};

const lichChieuHeThongReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HE_THONG_SUCCESS: {
      state.systemList = payload;
      return { ...state };
    }
    case GET_HE_THONG_FAILED: {
      state.errors = payload;
      return { ...state };
    }

    default:
      return state;
  }
};

export default lichChieuHeThongReducer;
