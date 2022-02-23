import styled from "styled-components";
import variableStyles from "styles/variable-styles";
import { images } from "constants/images";

export const ApplicationContainer = styled.section`
  background: url(${images.BG_APP_SECTION});
  position: relative;
  height: 650px;
`;

export const ApplicationContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${variableStyles.primaryWhite};
  .slide-group {
    position: relative;
    .slider {
      position: absolute;
      top: 10px;
      left: 6px;
      width: 192px;
      .img-slide-item {
        border-radius: 20px;
      }
    }
  }
`;
