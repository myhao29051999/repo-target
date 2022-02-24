import styled from "styled-components";
import variableStyles from "styles/variable-styles";
import { Row, Col } from "antd";

export const FooterContainer = styled.div`
  background-color: #222;
  position: relative;
  height: 100vh;
  @media only screen and (max-width: 992px) {
    height: 130vh;
  }
`;

export const FooterContent = styled(Row)`
  display: flex;
  width: 70%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  padding: 30px 0;
  .footer-divide {
    border-top: 0.5px solid #4a4a4a;
    margin-bottom: 30px;
    width: 100%;
  }
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
  .item-content {
    margin-right: 40px;
  }
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

export const FooterInfoGroup = styled.div`
  display: flex;
  width: 100%;
  .img-brand-tix {
    border-radius: 6px;
    margin-right: 16px;
  }
  .info {
    line-height: 1.8;
    color: ${variableStyles.textGray};
    font-size: ${variableStyles.fontSize_12};
    font-weight: ${variableStyles.fwNormal};
    .info-email {
      color: ${variableStyles.primaryRed};
    }
  }
  .img-brand-tix2 {
    display: block;
    margin: 0 auto;
    @media only screen and (max-width: 992px) {
      display: none;
    }
  }
`;
