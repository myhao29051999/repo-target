import styled from "styled-components";
import variableStyles from "styles/variable-styles";

export const MasterLayoutStyle = styled.section`
  background: ${variableStyles.backgroundWhite};
  width: 64%;
  margin: 60px auto;
  @media only screen and (max-width: 1400px) {
    width: 68%;
  }
  @media only screen and (max-width: 1300px) {
    width: 78%;
  }
  @media only screen and (max-width: 1142px) {
    width: 80%;
  }
  @media only screen and (max-width: 1096px) {
    width: 90%;
  }
  @media only screen and (max-width: 864px) {
    width: 93%;
  }
  @media only screen and (max-width: 746px) {
    width: 80%;
  }
  @media only screen and (max-width: 657px) {
    width: 85%;
  }
  @media only screen and (max-width: 544px) {
    width: 50%;
  }
  @media only screen and (max-width: 400px) {
    width: 61.5%;
  }
`;
