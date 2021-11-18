import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;

export const CardStyle = styled(Card)`
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
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
    @media only screen and (max-width: 769px) {
      height: 220px;
      img {
        height: 220px;
      }
    }
    @media only screen and (max-width: 650px) {
      height: 175px;
      img {
        height: 175px;
      }
    }
    @media only screen and (max-width: 580px) {
      height: 150px;
      img {
        height: 150px;
      }
    }
    @media only screen and (max-width: 500px) {
      height: 120px;
      img {
        height: 120px;
      }
    }
    @media only screen and (max-width: 415px) {
      height: 100px;
      img {
        height: 100px;
      }
    }
    @media only screen and (max-width: 360px) {
      height: 90px;
      img {
        height: 90px;
      }
    }
  }

  /* ant-card-body */
  .ant-card-body {
    padding: 15px 7px;
    .ant-card-meta-title {
      font-size: 16px;
    }
    @media only screen and (max-width: 992px) {
      padding: 10px 5px;
    }
    @media only screen and (max-width: 580px) {
      padding: 7px 5px;
    }
    @media only screen and (max-width: 500px) {
      .ant-card-meta-title {
        font-size: 14px;
      }
    }
    @media only screen and (max-width: 415px) {
      padding: 3px 4px;
    }
    @media only screen and (max-width: 360px) {
      padding: 2px 2px;
    }
  }

  /* Card */
  @media only screen and (max-width: 650px) {
    margin-bottom: 15px;
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const MetaStyle = styled(Meta)``;
