import React, { useState } from "react";
import { Image } from "antd-mobile";
import PropTypes from "prop-types";

// styles
import {
  FilmCardStyle,
  InfoFilm,
  FilmName,
  ButtonDetail,
  MoreInfo,
} from "./style";
function FilmCard(props) {
  const { type, name, image, listTheaters, onClick, ...orther } = props;

  // states
  const [isShowMoreInfo, setIsShowMoreInfo] = useState(false);
  const [isShowButtonSeeMore, setIsShowButtonSeeMore] = useState(true);

  const onShowMoreInfo = () => {
    setIsShowMoreInfo(true);
    setIsShowButtonSeeMore(false);
  };
  const onHiddenMoreInfo = () => {
    setIsShowMoreInfo(false);
    setIsShowButtonSeeMore(true);
  };

  return (
    <FilmCardStyle aria-hidden={true} onClick={onClick}>
      <Image width={50} height={50} src={image} alt="img-film" />
      <InfoFilm>
        <FilmName type={type}>{name}</FilmName>
      </InfoFilm>
    </FilmCardStyle>
  );
}
FilmCard.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  listTheaters: PropTypes.any,
  onClick: PropTypes.func,
};
export default FilmCard;
