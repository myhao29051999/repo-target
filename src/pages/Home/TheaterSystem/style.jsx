import styled from "styled-components";
import { Row, Col } from "antd";
import { Image } from "antd-mobile";
import variableStyles from "styles/variable-styles";

export const TheaterContent = styled(Row)`
  border: 1px solid ${variableStyles.borderLightGray};
  .img-active {
    opacity: 1 !important;
  }
`;

export const ColImgTheater = styled(Col)`
  padding: 0 20px;
  border-left: 1px solid ${variableStyles.borderLightGray};
`;

export const ImgTheater = styled(Image)`
  width: 50px;
  height: 50px;
  display: block;
  margin: 0 auto;
  opacity: 0.6;
  cursor: pointer;
`;

export const DivCover = styled.div`
  border-bottom: 1px solid ${variableStyles.borderLightGray};
  padding: 25px 0;
`;
