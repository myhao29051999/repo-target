import styled from "styled-components";
import variableStyles from "styles/variable-styles";

export const MasterLayoutStyle = styled.section`
  background: ${variableStyles.backgroundWhite};
  width: 70%;
  margin: 60px auto;
  @media only screen and (max-width: 1400px) {
    width: 70%;
  }
  @media only screen and (max-width: 1300px) {
    width: 80%;
  }
  @media only screen and (max-width: 1142px) {
    width: 80%;
  }
  @media only screen and (max-width: 1096px) {
    width: 95%;
  }
  @media only screen and (max-width: 864px) {
    width: 100%;
  }
  /* @media only screen and (max-width: 769px) {
    margin: 10px auto;
  } */
`;
