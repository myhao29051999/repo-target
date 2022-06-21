import styled from "styled-components";
import { images } from "constants/images";
import variableStyles from "styles/variable-styles";
import { Image } from "antd-mobile";

export const MovieDetailContainer = styled.div`
  background-image: url(${images.MOVIE_DETAIL_BG});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  vertical-align: baseline;
  position: relative;
  font-family: "Roboto", sans-serif;
  .ant-table {
    background: none !important;
    color: ${variableStyles.primaryWhite};
  }
  .ant-table-thead > tr > th {
    background: none !important;
    color: ${variableStyles.primaryWhite};
  }
  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: none !important;
    color: ${variableStyles.primaryRed};
  }
`;

export const MovieDetailContent = styled.div`
  padding: 120px 60px;
  min-height: 650px;
  @media only screen and (max-width: 1090px) {
    padding: 120px 16px;
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-bottom: 16px;
  .text-back-to-homePage {
    font-size: ${variableStyles.fontSize_24};
    color: ${variableStyles.primaryWhite};
    transition: 0.4s all;
    font-weight: ${variableStyles.fwStrongBold};
    cursor: pointer;
    &:hover {
      color: ${variableStyles.textRed};
    }
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const TextBackToHomePage = styled.div`
  font-size: ${variableStyles.fontSize_24};
  color: ${variableStyles.primaryWhite};
  transition: 0.4s all;
  font-weight: ${variableStyles.fwStrongBold};
  text-transform: uppercase;
`;

export const TitleDivide = styled.div`
  border-right: 2px solid ${variableStyles.primaryWhite};
  height: 30px;
  margin: 0 10px;
`;

export const MovieDescribe = styled.div`
  font-size: ${variableStyles.fontSize_16};
  color: #a6b2c9;
  line-height: 26px;
  padding: 18px 0;
`;

export const MovieTextDetail = styled.div`
  font-size: ${variableStyles.fontSize_14};
  color: #e8eff5;
  margin-right: 32px;
`;

export const MovieDetailGroup = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const MovieTextTypeFilm = styled.div`
  font-size: 17px;
  font-weight: ${variableStyles.fwStrongBold};
  color: ${variableStyles.textRed};
  text-transform: uppercase;
`;

export const MovieDetailImg = styled(Image)`
  width: 360px;
  height: 533px;
  @media only screen and (max-width: 460px) {
    width: 200px;
    height: 300px;
  }
`;

export const SpinCustom = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;