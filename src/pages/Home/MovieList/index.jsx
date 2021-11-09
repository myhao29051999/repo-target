import React, { useEffect } from "react";
// liblaries
import { useSelector, useDispatch } from "react-redux";
import { Link, animateScroll as scroll } from "react-scroll";

// utils
import { formatDate } from "utils";

// layouts
import MasterLayout from "layouts/MasterLayout";

// actions
import { getMovieList } from "store/actions/movie.action";

// components
import MovieCard from "./MovieCard";

// styles
import { SliderStyle } from "./style";
function MovieList() {
  const movieList = useSelector((state) => state.movie.movieList);
  const dispatch = useDispatch(); //giup dispatch 1 cai action trong redux, vd bam nut add...

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
        style={{
          ...style,
          display: "block",
          background: "gray",
        }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: "center",
    centerModeL: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow className="iconArrow" />,
    prevArrow: <SamplePrevArrow className="iconArrow" />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1096,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 745,
        settings: {
          slidesToShow: 2,
          rows: 2,
          infinite: true,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 544,
        settings: {
          slidesToShow: 1,
          rows: 1,
          infinite: true,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  function checkDate(currentDate, someDate) {
    if (someDate > currentDate) {
      return <p>sắp chiếu</p>;
    } else {
      return <p>đang chiếu</p>;
    }
  }

  return (
    <MasterLayout id="showTimes">
      <SliderStyle {...settings}>{renderListMovie()}</SliderStyle>
      <h1>{formatDate(newDate, "DD-MM-YYYY")}</h1>
      {/* <h1>Ngày hôm nay: {date + "-" + month + "-" + year}</h1> */}
      <h1>
        Render ds ngày:{" "}
        {movieList.map((movie, item) => (
          <p>
            -Tên phim: {movie.tenPhim} + Ngày chiếu:{" "}
            {formatDate(movie.ngayKhoiChieu, "DD-MM-YYYY")} + Check:{" "}
            {checkDate(formatDate(newDate), formatDate(movie.ngayKhoiChieu))}
          </p>
        ))}
      </h1>
      <button onClick={() => scroll.scrollToTop()}>scroll to top</button>
    </MasterLayout>
  );
}
export default MovieList;
