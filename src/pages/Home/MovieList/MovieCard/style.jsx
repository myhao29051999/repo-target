import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;

export const CardStyle = styled(Card)`
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  .button-play {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .card__black {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    padding: 50px 30px;
    opacity: 0;
    transition: all 0.5s;
    background-color: rgba(0, 0, 0, 0.8);
    transform: scale(0);
  }
  :hover {
    .card__black {
      transform: scale(1);
      opacity: 1;
    }
  }
  /* ant-card-cover */
  .ant-card-cover {
    height: 318px;
    img {
      height: 318px;
    }
    @media only screen and (max-width: 951px) {
      height: 260px;
      img {
        height: 260px;
      }
    }

    /* @media only screen and (max-width: 650px) {
      height: 175px;
      img {
        height: 175px;
      }
    } */
    @media only screen and (max-width: 580px) {
      height: 240px;
      img {
        height: 240px;
      }
    }
    @media only screen and (max-width: 500px) {
      height: 220px;
      img {
        height: 220px;
      }
    }
  }

  /* ant-card-body */
  .ant-card-body {
    padding: 0;
  }

  /* Card */
  @media only screen and (max-width: 650px) {
    margin-bottom: 15px;
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const MetaStyle = styled(Meta)``;
