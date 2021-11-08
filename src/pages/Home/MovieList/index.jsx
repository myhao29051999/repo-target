import React, { useEffect } from "react";
// liblaries
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";

// layouts
import MasterLayout from "layouts/MasterLayout";

// actions
import { getMovieList } from "store/actions/movie.action";

// components
import MovieCard from "./MovieCard";

function MovieList() {
  const movieList = useSelector((state) => state.movie.movieList);
  const dispatch = useDispatch(); //giup dispatch 1 cai action trong redux, vd bam nut add...

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  const renderListMovie = () => {
    return movieList.map((movie, index) => {
      return (
        <div>
          <MovieCard
            key={index}
            urlImage={movie?.hinhAnh}
            movieName={movie?.tenPhim}
          />
        </div>
      );
    });
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: "center",
    centerModeL: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 635,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <MasterLayout>
      <h1>DS phim</h1>
      <Slider {...settings}>{renderListMovie()}</Slider>
    </MasterLayout>
  );
}
export default MovieList;
