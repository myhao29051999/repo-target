import styled from "styled-components";
import variableStyles from "styles/variable-styles";
import { images } from "constants/images";

export const ApplicationContainer = styled.section`
  background: url(${images.BG_APP_SECTION});
  position: relative;
  min-height: 650px;
  margin-top: 120px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ApplicationContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${variableStyles.primaryWhite};
  width: 70%;
  margin: 0 auto;

  .application-info {
    margin-top: 24px;
  }
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
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const AppRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  color: ${variableStyles.primaryWhite};
  font-size: ${variableStyles.fontSize_32};
  font-weight: ${variableStyles.fwStrongBold};
`;

export const SubTitle = styled.div`
  color: ${variableStyles.primaryWhite};
  font-size: ${variableStyles.fontSize_18};
  font-weight: normal;
  margin: 16px 0;
`;

export const SubTitle2 = styled.div`
  color: ${variableStyles.primaryWhite};
  font-size: ${variableStyles.fontSize_14};
  font-weight: normal;
  margin: 16px 0;
`;

export const NameApp = styled.a`
  color: ${variableStyles.primaryWhite};
  border-bottom: 1px solid ${variableStyles.primaryWhite};
  &:hover {
    color: ${variableStyles.primaryRed};
  }
`;
