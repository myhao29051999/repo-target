import React from "react";
import { Image } from "antd-mobile";
import PropTypes from "prop-types";

// styles
import { TheaterCardStyle, InfoTheater, TheaterName } from "./style";
function TheaterCard(props) {
  const { type, name, image, ...orther } = props;
  return (
    <TheaterCardStyle>
      <Image width={50} height={50} src={image} alt="img-cinema" />
      <InfoTheater>
        <TheaterName type={type}>{name}</TheaterName>
      </InfoTheater>
    </TheaterCardStyle>
  );
}
TheaterCard.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};
export default TheaterCard;
