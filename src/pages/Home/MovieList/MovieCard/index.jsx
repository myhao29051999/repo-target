import React from "react";
import PropTypes from "prop-types";

// component
import { ModalTrailer } from "components";

// styles
import { CardStyle, MetaStyle } from "./style";
const propTypes = {
  urlImage: PropTypes.string,
  movieName: PropTypes.string,
  trailer: PropTypes.string,
};
function MovieCard(props) {
  const { urlImage, movieName, trailer, ...other } = props;
  return (
    <CardStyle hoverable cover={<img alt="img-detail-movie" src={urlImage} />}>
      <MetaStyle />
      <div className="card__black">
        <p>{movieName}</p>
        <ModalTrailer
          videoId={
            trailer.includes("https://www.youtube.com/watch?v=")
              ? trailer.slice(32)
              : trailer.slice(30)
          }
        />
      </div>
    </CardStyle>
  );
}
MovieCard.propTypes = propTypes;
export default MovieCard;
