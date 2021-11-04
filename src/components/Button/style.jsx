/* eslint-disable indent */
import styled from "styled-components";
import { Button } from "antd";
import variableStyles from "styles/variable-styles";

export const StyledButton = styled(Button)`
  transition: 0.8s;
  &.nonanimating-btn {
    &[ant-click-animating-without-extra-node]:after {
      animation: 0s;
    }
  }
  &.custom-ant-button {
    font-size: ${(props) => (props.size === "small" ? "12px" : "16px")};
    font-weight: ${variableStyles.fwStrongBold};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    line-height: ${variableStyles.lineHeight_24};
    padding: ${(props) => {
      switch (props.size) {
        case "large":
          return "0px 24px";
        case "small":
          return "0px 8px";
        default:
          return "16px 24px";
      }
    }};
    text-shadow: none;
    padding-top: ${(props) => props.size === "small" && "1px"};
    border: 1px solid;
    height: ${(props) => {
      switch (props.size) {
        case "large":
          return "36px";
        case "small":
          return "32px";
        default:
          return "56px";
      }
    }};
    color: ${(props) => {
      switch (props.type) {
        case "outlineRed":
          return variableStyles.primaryRed;
        // case "primaryPink":
        //   return variableStyles.backgroundWhite;
        // case "outlinePink":
        //   return variableStyles.primaryPink;
        // case "outlineGray":
        //   return variableStyles.textPrimary;
        // case "outlineWhite":
        //   return variableStyles.backgroundWhite;
        default:
          return variableStyles.backgroundWhite;
      }
    }};
    border-color: ${(props) => {
      switch (props.type) {
        case "outlineRed":
          return variableStyles.primaryRed;
        // case "outlinePink":
        //   return variableStyles.primaryPink;
        // case "primaryPink":
        //   return variableStyles.primaryPink;
        // case "outlineGray":
        //   return variableStyles.textPrimary;
        // case "outlineWhite":
        //   return variableStyles.backgroundWhite;
        default:
          return "transparent";
      }
    }};
    background: ${(props) => {
      switch (props.type) {
        case "outlineRed":
          return `transparent`;
        // case "primaryPink":
        //   return variableStyles.primaryPink;
        default:
          return `transparent`;
      }
    }};

    &:hover {
      color: ${(props) => {
        switch (props.type) {
          case "outlineRed":
            return variableStyles.textWhite;
          // case "outline":
          //   return variableStyles.neutral0;

          default:
            return variableStyles.textWhite;
        }
      }};
      /* border-color: ${(props) => {
        switch (props.type) {
          case "primary":
            return variableStyles.jeans400;
          case "outline":
            return variableStyles.jeans500;

          default:
            return variableStyles.neutral0;
        }
      }}; */
      background: ${(props) => {
        switch (props.type) {
          case "outlineRed":
            return variableStyles.primaryRed;
          // case "outline":
          //   return variableStyles.jeans500;

          default:
            return "transparent";
        }
      }};
    }
  }
`;
