import styled from "styled-components";
import variableStyles from "styles/variable-styles";

import { Row, Col } from "antd";

export const HeaderDes = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

export const LogoDes = styled(Col)`
  img {
    width: 50px;
  }
`;

export const ListDes = styled(Col)`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      margin-right: 20px;
      cursor: pointer;
      color: ${variableStyles.textBlack};
      font-family: "SF Regular";
    }
  }
`;

export const ButtonsDes = styled(Col)`
  /* display: flex; */
  .btn__signin {
    margin-top: 10px;
  }
`;
