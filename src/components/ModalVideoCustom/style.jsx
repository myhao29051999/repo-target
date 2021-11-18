import styled from "styled-components";
import variableStyles from "styles/variable-styles";
import ModalVideo from "react-modal-video";
export const ModalVideoStyle = styled(ModalVideo)``;
export const ButtonPlayStyle = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(110, 110, 109, 0.646);
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${variableStyles.textWhite};
  .fa-play {
    line-height: 60px;
    text-align: center;
    color: ${variableStyles.textWhite};
    display: block;
  }
`;
