import styled from "styled-components";
import variableStyles from "styles/variable-styles";
import { Modal } from "antd";

export const ModalLoginStyle = styled(Modal)`
  /* text-align: center; */
  .ant-modal-content {
    border-radius: 16px;
  }
  .modal-header__logo {
    display: block;
    margin: 0 auto;
  }
  .title-login {
    text-align: center;
  }
  .ant-form-item {
    margin-bottom: 12px !important;
  }
  a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #fb4226;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 20px;
    letter-spacing: 4px;
    width: 100%;
    text-align: center;
    :hover {
      background: #fb4226;
      color: #fff;
      border-radius: 5px;
      /* box-shadow: 0 0 5px #fb4226, 0 0 25px #fb4226, 0 0 50px #fb4226,
        0 0 100px #fb4226; */
    }
    span {
      position: absolute;
      display: block;
    }
    span:nth-child(1) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #fb4226);
      animation: btn-anim1 1s linear infinite;
    }
    @keyframes btn-anim1 {
      0% {
        left: -100%;
      }
      50%,
      100% {
        left: 100%;
      }
    }
    span:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, transparent, #fb4226);
      animation: btn-anim2 1s linear infinite;
      animation-delay: 0.25s;
    }

    @keyframes btn-anim2 {
      0% {
        top: -100%;
      }
      50%,
      100% {
        top: 100%;
      }
    }

    span:nth-child(3) {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg, transparent, #fb4226);
      animation: btn-anim3 1s linear infinite;
      animation-delay: 0.5s;
    }

    @keyframes btn-anim3 {
      0% {
        right: -100%;
      }
      50%,
      100% {
        right: 100%;
      }
    }
    span:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(360deg, transparent, #fb4226);
      animation: btn-anim4 1s linear infinite;
      animation-delay: 0.75s;
    }

    @keyframes btn-anim4 {
      0% {
        bottom: -100%;
      }
      50%,
      100% {
        bottom: 100%;
      }
    }
  }
`;

export const CreateAccountGroup = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: center;
`;

export const TitleNoAccount = styled.div`
  font-size: ${variableStyles.fontSize_12};
  color: ${variableStyles.textDarkGray};
  text-align: center;
  margin-right: 5px;
`;

export const ButtonCreate = styled.div`
  cursor: pointer;
  color: ${variableStyles.primaryRed};
  font-size: ${variableStyles.fontSize_12};
`;
