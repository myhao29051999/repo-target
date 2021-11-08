import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;

export const CardStyle = styled(Card)`
  width: 215px;
  margin-bottom: 20px;
  @media only screen and (max-width: 1020px) {
    width: 280px;
  }
  @media only screen and (max-width: 960px) {
    width: 250px;
  }
  @media only screen and (max-width: 864px) {
    width: 220px;
  }
  @media only screen and (max-width: 745px) {
    width: 300px;
  }
  .ant-card-cover {
    height: 318px;
    img {
      height: 318px;
    }
    @media only screen and (max-width: 400px) {
      height: 290px;
      img {
        height: 290px;
      }
    }
  }
`;

export const MetaStyle = styled(Meta)``;
