import styled from "styled-components";
import variableStyles from "styles/variable-styles";

export const TheaterCardStyle = styled.div`
  display: flex;
  cursor: pointer;
  opacity: 0.6;
`;

export const InfoTheater = styled.div`
  margin-left: 16px;
`;

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

export const TheaterAddress = styled.div`
  color: ${variableStyles.textGray};
  font-size: ${variableStyles.fontSize_12};
  font-weight: normal;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 4px 0;
`;

export const ButtonDetail = styled.div`
  color: ${variableStyles.primaryRed};
  font-size: ${variableStyles.fontSize_12};
  font-weight: normal;
  cursor: pointer;
`;

export const MoreInfo = styled.div`
  color: ${variableStyles.textGray};
  font-size: ${variableStyles.fontSize_12};
  font-weight: normal;
  width: 200px;
  max-width: 200px;
`;
