import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieList } from "store/actions/movie.action";
function MovieList() {
  const movieList = useSelector((state) => state.movie.movieList);
  const dispatch = useDispatch(); //giup dispatch 1 cai action trong redux, vd bam nut add...
  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  const renderListMovie = () => {
    return movieList.map((movie, index) => {
      return <p key={index}>{movie.tenPhim}</p>;
    });
  };
  return (
    <div>
      <h1>DS phim</h1>
      {renderListMovie()}
    </div>
  );
}
export default MovieList;
