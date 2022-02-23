import styled from "styled-components";
import variableStyles from "styles/variable-styles";
import { Row, Col } from "antd";

export const FooterContainer = styled.div`
  height: 650px;
  background-color: #222;
  position: relative;
`;

export const FooterContent = styled(Row)`
  display: flex;
  width: 70%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  justify-content: space-between;
  padding: 30px 0;
`;

export const FooterItem = styled(Col)``;

export const Title = styled.div`
  color: ${variableStyles.primaryWhite};
  font-size: ${variableStyles.fontSize_12};
  margin-bottom: 16px;
`;

export const SubTitle = styled.div`
  color: #949494;
  font-size: ${variableStyles.fontSize_12};
  margin-bottom: 12px;
  transition: all 0.5s;
  font-weight: ${variableStyles.fwStrongBold};
}
`;

export const SocialGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const GroupCover = styled.div`
  display: flex;
  margin-bottom: 15px;
  .item-content {
    margin-right: 40px;
  }
  .icon-partner {
    margin-right: 15px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
      transform: scale(1.1);
    }
  }
`;
