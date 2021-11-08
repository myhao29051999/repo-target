import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;

export const CardStyle = styled(Card)`
  width: 240px;
  margin-bottom: 20px;
  @media only screen and (max-width: 635px) {
    width: 100%;
  }
  .ant-card-cover {
    height: 330px;
    img {
      height: 330px;
    }
  }
`;

export const MetaStyle = styled(Meta)``;
