import styled from "styled-components";
import { Row, Col } from "antd";
import variableStyles from "styles/variable-styles";

export const HeaderMobileStyle = styled(Row)`
  justify-content: space-between;
  top: 0;
  height: 60px;
  width: 100%;
  z-index: 10;
  background: ${variableStyles.backgroundWhiteGradient};
  position: fixed;
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  padding-left: 10px;
  padding-right: 15px;
`;

export const HeaderLogoStyle = styled(Col)`
  img {
    width: 50px;
    padding-top: 5px;
  }
`;

export const HeaderButtonStyle = styled(Col)``;
export const HeaderListContentStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 30px;
  margin-left: 4px;
  li {
    a {
      color: ${variableStyles.textBlack};
      &:hover {
        color: ${variableStyles.primaryRed};
      }
    }
    margin-bottom: 25px;
    cursor: pointer;
    color: ${variableStyles.textBlack};
    font-family: "SF Regular";
    &:hover {
      color: ${variableStyles.primaryRed};
    }
  }
`;
export const UserInfo = styled.div`
  color: ${variableStyles.textBlack};
  margin-right: 10px;
`;

export const GroupLoginSuccess = styled.div`
  display: flex;
`;
