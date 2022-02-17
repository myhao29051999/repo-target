import {
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_LIST_SUCCESS,
} from "../constants/movie.const";
import axios from "axios";
import { startLoading, stopLoading } from "./common.action";
// action call api
export const getMovieList = () => {
  return (dispatch) => {
    dispatch(startLoading());
    //call api
    axios({
      method: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        // console.log(res.data);
        //gửi lên store
        dispatch(getMovieListSuccess(res.data));
        // console.log("data" + res.data);
      })
      .catch((err) => {
        dispatch(stopLoading());
        //gửi lên store
        dispatch(getMovieListFailed(err));
      });
  };
};
const getMovieListSuccess = (movieList) => {
  return {
    type: GET_MOVIE_LIST_SUCCESS,
    payload: movieList,
  };
};
const getMovieListFailed = (err) => {
  return {
    type: GET_MOVIE_LIST_FAILED,
    payload: err,
  };
};

//get detail
const getMovieDetailSuccess = (movieList) => {
  return {
    type: GET_MOVIE_DETAIL_SUCCESS,
    payload: movieList,
  };
};
const getMovieDetailFailed = (err) => {
  return {
    type: GET_MOVIE_DETAIL_FAILED,
    payload: err,
  };
};

export const getMovieDetail = (movieCode) => {
  return (dispatch) => {
    dispatch(startLoading());
    //call api
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        //gửi lên store
        dispatch(getMovieDetailSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        //gửi lên store
        dispatch(getMovieDetailFailed(err));
      });
  };
};
