import React, { useEffect } from "react";
// liblaries
import { useSelector, useDispatch } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

// utils
import { formatDate } from "utils";

// layouts
import MasterLayout from "layouts/MasterLayout";

// actions
import { getMovieList } from "store/actions/movie.action";

// constants
import { images } from "constants/images";

// components
import MovieCard from "./MovieCard";

// styles
import { SliderStyle, TabsShowTimeStyle, TabPaneShowTimeStyle } from "./style";

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
      <img
        className="slick-arrow-left"
        style={{ ...style, display: "block" }}
        onClick={onClick}
        src={images.IMG_BACK_ARROW}
        alt="arrow_left"
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        className="slick-arrow-right"
        style={{ ...style, display: "block" }}
        onClick={onClick}
        src={images.IMG_NEXT_ARROW}
        alt="arrow_right"
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      <TabsShowTimeStyle defaultActiveKey="1">
        <TabPaneShowTimeStyle tab="Đang chiếu" key="1">
          <SliderStyle nextArrow={<SampleNextArrow />} {...settings}>
            {renderListMovie()}
          </SliderStyle>
        </TabPaneShowTimeStyle>
        <TabsShowTimeStyle tab="Sắp chiếu" key="2">
          <h1>{formatDate(newDate, "DD-MM-YYYY")}</h1>
          <h1>
            Render ds ngày:{" "}
            {movieList.map((movie, item) => (
              <p>
                -Tên phim: {movie.tenPhim} + Ngày chiếu:{" "}
                {formatDate(movie.ngayKhoiChieu, "DD-MM-YYYY")} + Check:{" "}
                {checkDate(
                  formatDate(newDate),
                  formatDate(movie.ngayKhoiChieu)
                )}
              </p>
            ))}
          </h1>
        </TabsShowTimeStyle>
      </TabsShowTimeStyle>

      <button onClick={() => scroll.scrollToTop()}>scroll to top</button>
    </MasterLayout>
  );
}
export default MovieList;
