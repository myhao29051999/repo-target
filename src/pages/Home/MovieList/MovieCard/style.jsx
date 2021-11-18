import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;

export const CardStyle = styled(Card)`
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;

  .ant-card-cover {
    height: 318px;
    img {
      height: 318px;
    }
    /* @media only screen and (max-width: 746px) {
      height: 290px;
      img {
        height: 290px;
      }
    }
    @media only screen and (max-width: 546px) {
      height: 250px;
      img {
        height: 250px;
      }
    }
    @media only screen and (max-width: 470px) {
      height: 220px;
      img {
        height: 220px;
      }
    }
    @media only screen and (max-width: 400px) {
      height: 175px;
      img {
        height: 175px;
      }
    }
    @media only screen and (max-width: 361px) {
      height: 175px;
      img {
        height: 175px;
      }
    } */
  }
`;

export const MetaStyle = styled(Meta)``;
