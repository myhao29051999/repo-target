import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

// component
import { ModalTrailer } from "components";

// configs
import { paths } from "configs/path";

// styles
import { CardStyle, MetaStyle } from "./style";
const propTypes = {
  urlImage: PropTypes.string,
  movieName: PropTypes.string,
  trailer: PropTypes.string,
  maPhim: PropTypes.string,
};
function MovieCard(props) {
  const { urlImage, movieName, trailer, maPhim, ...other } = props;
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
        <ModalTrailer videoId={trailer} />
      </div>
    </CardStyle>
  );
}
MovieCard.propTypes = propTypes;
export default MovieCard;
