import styled from "styled-components";
import variableStyles from "styles/variable-styles";

export const TixCarouselStyle = styled.div`
  position: relative;

  #thumbnail-div {
    justify-content: center;
  }

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 49%;
    width: auto;
    padding: 16px;
    margin-top: -22 px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3 px 3 px 0;
    -webkit-user-select: none;
    user-select: none;
  }
  .tix-carousel {
    &:hover {
      .button-play {
        display: block;
      }
    }
  }
  .button-play {
    position: absolute;
    background: rgba(149, 145, 145, 0.855);
    font-size: 60px;
    bottom: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    display: none;
    transition: all 1s;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: 1px solid ${variableStyles.textWhite};
    i {
      font-size: ${variableStyles.fontSize_24};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${variableStyles.textWhite};
    }
  }
`;
