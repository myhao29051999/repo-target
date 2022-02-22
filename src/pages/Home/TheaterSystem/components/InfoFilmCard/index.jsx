import React, { useState } from "react";
import { Image } from "antd-mobile";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
// utils
import { formatDate } from "utils";
// styles
import {
  FilmCardStyle,
  InfoFilm,
  FilmName,
  FilmDate,
  GroupFilmDate,
} from "./style";
function FilmCard(props) {
  const { type, name, image, listFilms, onClick, ...orther } = props;

  return (
    <>
      <FilmCardStyle aria-hidden={true} onClick={onClick}>
        <Image width={50} height={50} src={image} alt="img-film" />
        <InfoFilm>
          <FilmName type={type}>{name}</FilmName>
        </InfoFilm>
      </FilmCardStyle>
      <GroupFilmDate>
        {listFilms.length > 0 ? (
          <Row gutter={[0, 8]}>
            {listFilms.map((item) => (
              <Col>
                <FilmDate>
                  {formatDate(item.ngayChieuGioChieu, "DD/MM/yyyy mm:ss")}
                </FilmDate>
              </Col>
            ))}
          </Row>
        ) : (
          ""
        )}
      </GroupFilmDate>
    </>
  );
}
FilmCard.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  listFilms: PropTypes.any,
  onClick: PropTypes.func,
};
export default FilmCard;
