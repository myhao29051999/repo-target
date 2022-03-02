import styled from "styled-components";
import { images } from "constants/images";
import variableStyles from "styles/variable-styles";
export const MovieDetailContainer = styled.div`
  background-image: url(${images.MOVIE_DETAIL_BG});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
  font-family: "Roboto", sans-serif;
  @media only screen and (max-width: 992px) {
    height: 170vh;
  }
`;

export const MovieDetailContent = styled.div`
  position: absolute;
  width: 80%;
  /* height: 100%; */
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 992px) {
    width: 98%;
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
