import styled from "styled-components";
import variableStyles from "styles/variable-styles";

export const TheaterCardStyle = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const InfoTheater = styled.div``;

export const TheaterName = styled.div`
  font-size: ${variableStyles.fontSize_14};
  font-weight: ${variableStyles.fwStrongBold};
  color: ${(props) => {
    switch (props.type) {
      case "bhdStar":
        return variableStyles.textBhdStar;
      case "cgv":
        return variableStyles.textCGV;
      case "cns":
        return variableStyles.textCNS;
      case "galaxy":
        return variableStyles.textGalaxy;
      case "lotte":
        return variableStyles.textLotte;
      case "mega":
        return variableStyles.textMega;
      default:
        return "black";
    }
  }};
`;
