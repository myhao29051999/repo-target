import {
  GET_HE_THONG_SUCCESS,
  GET_HE_THONG_FAILED,
  GET_THONG_TIN_CUM_RAP_THEO_HE_THONG_SUCCESS,
  GET_THONG_TIN_CUM_RAP_THEO_HE_THONG_FAILED,
} from "../constants/heThong.const";

import axios from "axios";

import { startLoading, stopLoading } from "./common.action";

// action call api

export const getListTheaterSystem = () => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        // gui len store
        dispatch(getListTheaterSystemSuccess(res.data));
        console.log("data" + res.data);
      })
      .catch((err) => {
        dispatch(stopLoading());
        // gui len store
        dispatch(getListTheaterSystemFailed(err));
      });
  };
};

const getListTheaterSystemSuccess = (systemList) => {
  return {
    type: GET_HE_THONG_SUCCESS,
    payload: systemList,
  };
};

const getListTheaterSystemFailed = (err) => {
  return {
    type: GET_HE_THONG_FAILED,
    payload: err,
  };
};

// Lay thong tin cum rap theo he thong

const getThongTinCumRapTheoHeThongSuccess = (maHeThongRap) => {
  return {
    type: GET_THONG_TIN_CUM_RAP_THEO_HE_THONG_SUCCESS,
    payload: maHeThongRap,
  };
};

const getThongTinCumRapTheoHeThongFailed = (err) => {
  return {
    type: GET_THONG_TIN_CUM_RAP_THEO_HE_THONG_FAILED,
    payload: err,
  };
};

export const getThongTinCumRapTheoHeThong = (maHeThongRap) => {
  return (dispatch) => {
    dispatch(startLoading());

    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading);
        dispatch(getThongTinCumRapTheoHeThongSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getThongTinCumRapTheoHeThongFailed(err));
      });
  };
};
