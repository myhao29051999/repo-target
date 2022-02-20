import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Spin } from "antd";

// actions
import { getMovieDetail } from "store/actions/movie.action";
function MovieDetail() {
  const { tenPhim } = useSelector((state) => state.movie.movieDetail);
  const loading = useSelector((state) => state.common.loading);
  const dispatch = useDispatch();
  const params = useParams();

  const renderMovieDetail = () => {
    if (loading) {
      return <Spin />;
    } else {
      return <div>Tên phim: {tenPhim}</div>;
    }
  };

  useEffect(() => {
    dispatch(getMovieDetail(params.maPhim));
  }, [params.maPhim]);

  return <div style={{ marginTop: "100px" }}>{renderMovieDetail()}</div>;
}

export default MovieDetail;
