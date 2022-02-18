import styled from "styled-components";
import variableStyles from "styles/variable-styles";

export const HeaderDes = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 60px;
  background: ${variableStyles.backgroundWhiteGradient};
  box-shadow: 0 0 15px rgb(0 0 0 / 30%);
  z-index: 10;
  top: 0;
  align-items: center;
`;

export const LogoDes = styled.div`
  img {
    width: 50px;
  }
  margin-left: 20px;
`;

export const ListDes = styled.div`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      a {
        margin-right: 20px;
        cursor: pointer;
        color: ${variableStyles.textBlack};
        &:hover {
          color: ${variableStyles.primaryRed};
        }
      }
    }
  }
`;

export const ButtonsDes = styled.div`
  margin-right: 20px;
  /* .btn__signin {
    margin-top: 10px;
  } */
`;

export const UserInfo = styled.div`
  color: ${variableStyles.textBlack};
  margin-right: 20px;
`;

export const GroupLoginSuccess = styled.div`
  display: flex;
`;
