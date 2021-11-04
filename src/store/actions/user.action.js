import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
} from "../constants/user.const";
import { startLoading, stopLoading } from "./common.action";
//
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
        console.log(res.data);
        //lưu data xuống localStorage
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        //gửi lên store
        dispatch(postLoginSuccess(res.data));
        //login thành công thì quay lại trang trc đó
        history.goBack();
      })
      .catch((err) => {
        dispatch(stopLoading());
        //gửi lên store
        dispatch(postLoginFailed(err));
      });
  };
};

// action call api
// export const postLogin = (email, password, history) => {
//   return (dispatch) => {
//     dispatch(startLoading());
//     //call api
//     const cms_url = "https://acblms.wejelly.dev/";
//     const urlLogin = cms_url + "api/cms/staff/login";
//     axios({
//       method: "POST",
//       url: urlLogin,
//       data: {
//         email,
//         password,
//       },
//     })
//       .then((res) => {
//         dispatch(stopLoading());
//         console.log(res.data);
//         //lưu data xuống localStorage
//         localStorage.setItem("userLogin", JSON.stringify(res.data));
//         console.log("wejelly" + res.data);
//         //gửi lên store
//         dispatch(postLoginSuccess(res.data));
//         //login thành công thì quay lại trang trc đó
//         history.goBack();
//       })
//       .catch((err) => {
//         dispatch(stopLoading());
//         //gửi lên store
//         dispatch(postLoginFailed(err));
//       });
//   };
// };

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
