import styled from "styled-components";
import { Row, Col } from "antd";
import variableStyles from "styles/variable-styles";

export const HeaderMobileStyle = styled(Row)`
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 23px;
`;

export const HeaderLogoStyle = styled(Col)`
  img {
    width: 50px;
  }
`;

export const HeaderButtonStyle = styled(Col)``;
export const HeaderListContentStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;
  margin-left: 4px;
  li {
    margin-bottom: 25px;
    cursor: pointer;
    color: ${variableStyles.textBlack};
    font-family: "SF Regular";
    &:hover {
      color: ${variableStyles.primaryRed};
    }
  }
`;
