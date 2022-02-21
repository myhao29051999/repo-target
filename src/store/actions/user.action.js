import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../constants/user.const";
import { startLoading, stopLoading } from "./common.action";
// login
const postLoginSuccess = (userList) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userList,
  };
};
const postLoginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};
export const postLogin = (taiKhoan, matKhau, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    //call api

    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: {
        taiKhoan,
        matKhau,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        //lưu data xuống localStorage
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        //gửi lên store
        dispatch(postLoginSuccess(res.data));
        //login thành công thì quay lại trang trc đó
        history.goBack();
      })
      .catch((err) => {
        alert("Tên tài khoản hoặc mật khẩu không chính xác");
        dispatch(stopLoading());
        //gửi lên store
        dispatch(postLoginFailed(err));
      });
  };
};

// register
const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

const registerFailed = (err) => {
  return {
    type: REGISTER_FAILED,
    payload: err,
  };
};

export const registerAccount = (params) => {
  return (dispatch) => {
    dispatch(startLoading());

    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: params,
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(registerSuccess(res.data));
      })
      .catch((err) => {
        alert("Đăng ký không thành công");
        console.log("dki k thành công", err);
        dispatch(stopLoading);
        dispatch(registerFailed(err));
      });
  };
};

// get list users
export const getUserList = () => {
  return (dispatch) => {
    dispatch(startLoading());
    //call api
    axios({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        //gửi lên store
        dispatch(getUserListSuccess(res.data));
        console.log("data" + res.data);
      })
      .catch((err) => {
        dispatch(stopLoading());
        //gửi lên store
        dispatch(getUserListFailed(err));
      });
  };
};
const getUserListSuccess = (userList) => {
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: userList,
  };
};
const getUserListFailed = (err) => {
  return {
    type: GET_USER_LIST_FAILED,
    payload: err,
  };
};
