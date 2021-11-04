import {
  GET_BOOKING_LIST,
  GET_BOOKING_LIST_SUCCESS,
  GET_BOOKING_LIST_FAILED,
} from "../constants/booking.const";

const initialState = {
  listChair: [],
  errors: [],
};

const bookingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKING_LIST_SUCCESS:
      return { ...state, listChair: payload.danhSachGhe }; //cập nhật lại ds ghế
    case GET_BOOKING_LIST_FAILED:
      return { ...state, errors: payload };
    case "DANG_CHON": {
      const { listChair } = state;
      //nhấn vố cái ghê nào thì gửi dl ghế đó lên (payload: chair)
      const index = listChair.findIndex(
        (chair) => chair.maGhe === payload.maGhe //payload là dl gửi lên
      );
      if (index !== -1) {
        const oldChair = listChair[index]; //lấy ghế cũ r xét đang chọn là true
        const newChair = { ...oldChair, dangChon: !oldChair.dangChon };
        listChair[index] = newChair; //cập nhât lại
      }
      return { ...state };
    }
    default:
      return state;
  }
};
export default bookingReducer;
