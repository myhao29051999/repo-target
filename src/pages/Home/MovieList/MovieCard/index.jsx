import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

// component
import { ModalTrailer } from "components";

// configs
import { paths } from "configs/path";

// utils
import {getTrailerId} from 'utils';

// styles
import { CardStyle, MetaStyle } from "./style";

const propTypes = {
  urlImage: PropTypes.string,
  movieName: PropTypes.string,
  trailer: PropTypes.string,
  maPhim: PropTypes.any,
};
function MovieCard(props) {
  const { urlImage, movieName, trailer, maPhim, ...other } = props;
  const trailerId = getTrailerId(trailer);
  let history = useHistory();
  const handleClick = () => {
    history.push(paths.MOVIE_DETAIL + maPhim);
  };
  return (
    <CardStyle hoverable cover={<img alt="img-detail-movie" src={urlImage} />}>
      <MetaStyle />
      <div className="card__black">
        <p>{movieName}</p>
        <a onClick={handleClick}>Xem chi tiết</a>
        <ModalTrailer videoId={trailerId} />
      </div>
    </CardStyle>
  );
}
MovieCard.propTypes = propTypes;
export default MovieCard;
