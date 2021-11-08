import React from "react";
import PropTypes from "prop-types";

// styles
import { CardStyle, MetaStyle } from "./style";
const propTypes = {
  urlImage: PropTypes.string,
  movieName: PropTypes.string,
};
function MovieCard(props) {
  const { urlImage, movieName, ...other } = props;
  return (
    <CardStyle hoverable cover={<img alt="img-detail-movie" src={urlImage} />}>
      <MetaStyle
        title={movieName}
        // description="www.instagram.comgvhbgggggggggggggggggggggggffffffffffffffffffffffffffffg"
      />
    </CardStyle>
  );
}
MovieCard.propTypes = propTypes;
export default MovieCard;
