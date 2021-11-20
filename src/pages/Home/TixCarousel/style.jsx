import styled from "styled-components";
import Slider from "react-slick";
import variableStyles from "styles/variable-styles";

export const TixCarouselStyle = styled(Slider)`
  margin-top: 60px;
  .slick-list {
    height: 100% !important;
  }
  .slick-list:hover {
    .button-play {
      display: block;
    }
  }

  .ant-image {
    max-height: 620px;
  }
  .tix-carousel__item {
    position: relative;
    .modal-video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000000;
      cursor: pointer;
      opacity: 1;
      animation-timing-function: ease-out;
      animation-duration: 0.3s;
      animation-name: "modal-video";
      transition: opacity 0.3s ease-out;
      .modal-video-close-btn {
        width: 35px;
        height: 35px;
      }
      @media only screen and (max-width: 716px) {
        .modal-video-close-btn {
          width: 20px;
          height: 20px;
          top: 3px;
          right: 2px;
        }
      }
    }
    .button-play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
    }
  }
`;
