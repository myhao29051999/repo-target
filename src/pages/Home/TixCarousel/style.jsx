import styled from "styled-components";
import Slider from "react-slick";

import variableStyles from "styles/variable-styles";

export const TixCarouselStyle = styled(Slider)`
  margin-top: 60px;
  @media only screen and (max-width: 769px) {
    margin-top: 10px;
  }
  .slick-list {
    height: 100% !important;
  }
  .myVenobox {
    color: yellow;
  }
  .ant-image {
    max-height: 620px;
  }
`;
