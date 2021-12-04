import React, { useEffect, useState } from "react";
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

  function checkDateToShowUpcomingMovies(currentDate, someDate) {
    if (someDate > currentDate) {
      return true; // sắp chiếu
    } else {
      return false; // đang chiếu
    }
  }

  const renderListMovie = () => {
    return movieList.map((movie, index) => {
      return (
        <div>
          <MovieCard
            key={index}
            urlImage={movie?.hinhAnh}
            movieName={movie?.tenPhim}
            trailer={movie?.trailer}
            maPhim={movie?.maPhim}
          />
        </div>
      );
    });
  };

  const renderUpcomingMovie = () => {
    let newDate = new Date();

    return movieList.map((movie, index) => {
      if (
        checkDateToShowUpcomingMovies(
          formatDate(newDate),
          formatDate(movie.ngayKhoiChieu)
        )
      ) {
        return (
          <div>
            <MovieCard
              key={index}
              urlImage={movie?.hinhAnh}
              movieName={movie?.tenPhim}
              trailer={movie?.trailer}
            />
          </div>
        );
      } else {
        return <div>Phim sắp chiếu chưa có</div>;
      }
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
        breakpoint: 1496,
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
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  return (
    <MasterLayout id="showTimes">
      <TabsShowTimeStyle defaultActiveKey="1">
        <TabPaneShowTimeStyle tab="Đang chiếu" key="1">
          <SliderStyle nextArrow={<SampleNextArrow />} {...settings}>
            {renderListMovie()}
          </SliderStyle>
        </TabPaneShowTimeStyle>
        <TabPaneShowTimeStyle tab="Sắp chiếu" key="2">
          <SliderStyle nextArrow={<SampleNextArrow />} {...settings}>
            {renderUpcomingMovie()}
          </SliderStyle>
        </TabPaneShowTimeStyle>
      </TabsShowTimeStyle>

      <button onClick={() => scroll.scrollToTop()}>scroll to top</button>
    </MasterLayout>
  );
}
export default MovieList;
