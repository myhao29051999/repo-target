import styled from "styled-components";
import variableStyles from "styles/variable-styles";

export const MasterLayoutStyle = styled.div`
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
  @media only screen and (max-width: 745px) {
    width: 52%;
  }
  @media only screen and (max-width: 745px) {
    width: 52%;
  }
  @media only screen and (max-width: 449px) {
    width: 55%;
  }
  @media only screen and (max-width: 397px) {
    width: 64%;
  }
  @media only screen and (max-width: 391px) {
    width: 70%;
  }
`;
