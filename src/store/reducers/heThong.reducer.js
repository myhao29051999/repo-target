import {
  GET_HE_THONG_SUCCESS,
  GET_HE_THONG_FAILED,
  GET_THONG_TIN_CUM_RAP_THEO_HE_THONG_SUCCESS,
  GET_THONG_TIN_CUM_RAP_THEO_HE_THONG_FAILED,
} from "../constants/heThong.const";

const initialState = {
  systemList: [],
  errors: {},
  thongTinCumRap: [],
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
    case GET_THONG_TIN_CUM_RAP_THEO_HE_THONG_SUCCESS: {
      return { ...state, thongTinCumRap: payload };
    }
    case GET_THONG_TIN_CUM_RAP_THEO_HE_THONG_FAILED: {
      return { ...state, errors: payload };
    }

    default:
      return state;
  }
};

export default lichChieuHeThongReducer;
